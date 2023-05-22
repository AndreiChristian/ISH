import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getFacilityList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM facilities", []);

    if (!rows) {
      res.status(404).json({
        message: "could not find data",
      });
      throw new Error("no data");
    }

    res.json();
  } catch {
    (err: Error) => {
      console.error(err);
      return next(err);
    };
  }
};
