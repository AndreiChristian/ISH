import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getRegionList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rows } = await db.query("SELECT * FROM regions", []);

    if (!rows) {
      throw new Error("Regions does not exist");
    }

    res.status(200).json(rows);

    res.json({
      message: "regions",
    });
  } catch {
    (err: Error) => {
      console.error(err);
      return next(err);
    };
  }
};

export const getOneRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { regionId } = req.params;

    const { rows } = await db.query("SELECT * FROM regions WHERE id = $1", [
      regionId,
    ]);

    if (!rows) {
      throw new Error("Regions does not exist");
    }

    res.status(200).json(rows[0]);

    res.json({
      message: "regions",
    });
  } catch {
    (err: Error) => {
      console.error(err);
      return next(err);
    };
  }
};

export const postRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, country, state } = req.body;

    const { rows } = await db.query(
      "INSERT INTO regions (name, description, country, state) VALUES ($1, $2, $3, $4) ",
      [name, description, country, state]
    );

    if (!rows) {
      throw new Error("could not insert rows");
    }

    res.status(201).json({
      message: "region inserted successfully",
    });
  } catch {
    (err: Error) => {
      console.error(err);
      next(err);
    };
  }
};

export const patchRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { regionId } = req.params;
    const { name, description, country, state } = req.body;

    const { rowCount } = await db.query(
      "UPDATE regions SET name = $2, description = $3, country = $4, state = $5 WHERE id = $1 RETURNING *",
      [regionId, name, description, country, state]
    );

    if (rowCount === 0) {
      console.log("could not patch");
      throw new Error("could not patch region");
    }

    res.status(201).json({
      message: "patched success",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteRegion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { regionId } = req.params;

    const { rows } = await db.query("DELETE FROM regions WHERE id = $1", [
      regionId,
    ]);

    if (!rows) {
      throw new Error("could not patch region");
    }

    res.status(201).json({
      message: "patched success",
    });
  } catch {
    (err: Error) => {
      console.error(err);
      next(err);
    };
  }
};
