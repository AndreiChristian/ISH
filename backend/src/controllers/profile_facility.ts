import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getProfileFacilityList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("error with the db");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOneProfileFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("error with the db");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const postProfileFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("error with the db");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const patchProfileFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("error with the db");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteProfileFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("", []);

    if (!rows[0]) {
      throw new Error("error with the db");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
