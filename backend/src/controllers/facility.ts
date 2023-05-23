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
      res.status(404).json({
        message: "could not find data",
      });
      throw new Error("no data");
    }

    res.json(rows);
  } catch {
    (err: Error) => {
      console.error(err);
      return next(err);
    };
  }
};

export const getOneFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { facilityId } = req.params;

  res.json({ facilityId });
};

export const postFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const patchFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
