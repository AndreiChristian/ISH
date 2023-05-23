import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getAddressList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM addresses", []);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOneAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { addressId } = req.params;

  try {
    const { rows } = await db.query("SELECT * FROM addresses WHERE id = $1", [
      addressId,
    ]);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const postAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { street, number, zip, city, state, country } = req.body;

    await db.query(
      "INSERT INTO addresses (street, number, zip, city, state, country) VALUES ($1, $2, $3, $4, $5, $6)",
      [street, number, zip, city, state, country]
    );

    res.status(201).json({
      message: "Created address successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const patchAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { addressId } = req.params;
    const { street, number, zip, city, state, country } = req.body;

    const { rowCount } = await db.query(
      "UPDATE addresses SET street = $2, number = $3, zip = $4, city = $5, state = $6, country = $7 WHERE id = $1 RETURNING *",
      [addressId, street, number, zip, city, state, country]
    );

    if (rowCount === 0) {
      throw new Error("could not patch address");
    }

    res.status(201).json({
      message: "patched success",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { addressId } = req.params;

    const { rowCount } = await db.query("DELETE FROM addresses WHERE id = $1", [
      addressId,
    ]);

    if (rowCount === 0) {
      throw new Error("could not delete address");
    }

    res.status(201).json({
      message: "deleted success",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
