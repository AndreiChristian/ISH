import { NextFunction, Request, Response } from "express";
import { db } from "../db";
import { hash } from "bcryptjs";

export const getGuestsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM GUESTS", []);

    if (!rows[0]) {
      throw new Error("no guests");
    }

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOneGuest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { guestId } = req.params;

    const { rows } = await db.query(
      "SELECT * FROM guests AS g JOIN addresses AS a ON g.address_id = a.id WHERE g.id = $1",
      [guestId]
    );

    if (!rows[0]) {
      throw new Error("no guests");
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const postGuest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { first_name, last_name, email, phone_number, address_id, password } =
      req.body;

    let password_hash: string;

    if (password) {
      password_hash = await hash(password, 10);
    }

    if (password_hash) {
      const { rows } = await db.query(
        "INSERT INTO guests (first_name, last_name, email, phone_number, address_id, password_hash) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [first_name, last_name, email, phone_number, address_id, password_hash]
      );
      if (!rows[0]) {
        throw new Error("could not store guest data");
      }
      res.json(rows);
    } else {
      const { rows } = await db.query(
        "INSERT INTO guests (first_name, last_name, email, phone_number, address_id) VALUES ($1, $2, $3, $4, $5)",
        [first_name, last_name, email, phone_number, address_id]
      );
      if (!rows[0]) {
        throw new Error("could not store guest data");
      }
      res.json(rows);
    }
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};
