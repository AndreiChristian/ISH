import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getFacilityCategoryList = async (
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

export const getOneFacilityCategory = async (
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
export const postFacilityCategory = async (
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
