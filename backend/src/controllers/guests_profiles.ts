import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getGuestProfilesList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { guestId } = req.params;

    const { rows } = await db.query(
      "SELECT * FROM profiles WHERE guest_id = $1",
      [guestId]
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
