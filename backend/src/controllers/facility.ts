import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getFacilityList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM facilities", []);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export const getOneFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { facilityId } = req.params;

  try {
    const { rows } = await db.query("SELECT * FROM facilities WHERE id = $1", [
      facilityId,
    ]);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};
export const getOneFacilityBySubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { subcategoryId } = req.params;

  try {
    const { rows } = await db.query(
      "SELECT * FROM facilities WHERE subcategory_id = $1",
      [subcategoryId]
    );

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export const postFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, subcategory, category, description, image_url } = req.body;

    await db.query(
      "INSERT INTO facilities (name, subcategory, category, description, image_url) VALUES ($1, $2, $3, $4, $5)",
      [name, subcategory, category, description, image_url]
    );

    res.status(201).json({
      message: "Created facility successfully",
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export const patchFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { facilityId } = req.params;
    const { name, subcategory, category, description, image_url } = req.body;

    const { rowCount } = await db.query(
      "UPDATE facilities SET name = $2, subcategory = $3, category = $4, description = $5, image_url = $6, created_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *",
      [facilityId, name, subcategory, category, description, image_url]
    );

    if (rowCount === 0) {
      console.log("could not patch");
      throw new Error("could not patch facility");
    }

    res.status(201).json({
      message: "patched success",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { facilityId } = req.params;

    const { rowCount } = await db.query(
      "DELETE FROM facilities WHERE id = $1",
      [facilityId]
    );

    if (rowCount === 0) {
      throw new Error("could not delete facility");
    }

    res.status(201).json({
      message: "deleted success",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
