import { NextFunction, Request, Response } from "express";
import { db } from "../db";
import { Console } from "console";

interface Property {
  name: string;
  address_id: number;
  region_id: number;
  description: string;
  price: number;
  rating: number;
  created_at?: Date;
  updated_at?: Date;
}

interface PropertyRequest extends Request {
  body: Property;
}

export const getPropertiesList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query(
      `SELECT p.id, p.name AS name, r.name AS region
    FROM properties AS p
    LEFT JOIN regions as r ON p.region_id = r.id`,
      []
    );

    if (!rows.length) {
      return res.status(404).json({ message: "No properties found" });
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getOneProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { propertyId } = req.params;

  try {
    const { rows } = await db.query(
      `SELECT property.id,
    property.name AS name,
    property.price,
    property.description,
    region.name AS region,
    address.city,
    address.street,
    address.number
FROM properties AS property
    JOIN regions As region ON property.region_id = region.id
    JOIN addresses AS address ON property.address_id = address.id
WHERE property.id = $1`,
      [propertyId]
    );

    if (!rows[0]) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const postProperty = async (
  req: PropertyRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, address_id, region_id, description, price, rating } = req.body;
  console.log("trying to post property");
  try {
    await db.query(
      "INSERT INTO properties (name, address_id, region_id, description, price, rating) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, address_id, region_id, description, price, rating]
    );

    res.status(201).json({
      message: "Created property successfully",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const patchProperty = async (
  req: PropertyRequest,
  res: Response,
  next: NextFunction
) => {
  const { propertyId } = req.params;
  const { name, address_id, region_id, description, price, rating } = req.body;

  try {
    const { rowCount } = await db.query(
      "UPDATE properties SET name = $2, address_id = $3, region_id = $4, description = $5, price = $6, rating = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $1",
      [propertyId, name, address_id, region_id, description, price, rating]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Could not update property" });
    }

    res.status(200).json({
      message: "Updated property successfully",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { propertyId } = req.params;

  try {
    const { rowCount } = await db.query(
      "DELETE FROM properties WHERE id = $1",
      [propertyId]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Could not delete property" });
    }

    res.status(200).json({
      message: "Deleted property successfully",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
