import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getFacilityCategoryList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query(`SELECT * FROM facilities_category`, []);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOneFacilityCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { facilityCategoryId } = req.params;

    const { rows } = await db.query(
      "SELECT * FROM facilities_category WHERE id = $1",
      [facilityCategoryId]
    );

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const postFacilityCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;

    const { rows } = await db.query(
      `INSERT INTO facilities_category(name)
    VALUES ($1) RETURNING *`,
      [name]
    );

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const patchFacilityCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const deleteFacilityCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("no data");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
