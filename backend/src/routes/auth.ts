import { NextFunction, Request, Response, Router } from "express";
import { db } from "../db";
import { compare } from "bcryptjs";

const router = Router();

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const { rows } = await db.query(
        "SELECT * FROM guests where email = $1 ",
        [email]
      );

      if (!rows[0]) {
        throw new Error("no email");
      }

      const isMatch = await compare(password, rows[0].password_hash);

      if (isMatch) {
        res.status(201).json(rows);
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

export default router;
