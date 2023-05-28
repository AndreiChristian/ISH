import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getFacilitySubcategoryList = async (
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

export const getOneFacilitySubcategory = async (
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
export const postFacilitySubcategory = async (
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
export const patchFacilitySubcategory = async (
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
export const deleteFacilitySubcategory = async (
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
