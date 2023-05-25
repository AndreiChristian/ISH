import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getReservationsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM reservations", []);

    if (!rows[0]) {
      throw new Error("no reservations");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOneReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const postReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    property_id,
    start_date,
    end_date,
    adults,
    kids,
    status,
    total_price,
  } = req.body;

//   console.table({
//     property_id,
//     start_date,
//     end_date,
//     adults,
//     kids,
//     status,
//     total_price,
//   });

  try {
    const { rows } = await db.query(
      `INSERT INTO reservations (property_id, start_date, end_date, adults, kids, status, total_price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `,
      [property_id, start_date, end_date, adults, kids, status, total_price]
    );

    if (!rows[0]) {
      throw new Error("could not store reservation");
    }

    res.json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const patchReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    console.log(err);
    next(err);
  }
};
