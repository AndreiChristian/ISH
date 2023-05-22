import { Router } from "express";
import { db } from "../db/index";

const router = Router();

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);

    if (!rows) {
      throw new Error();
    }

    res.json({
      rows,
    });
  } catch {
    (err: Error) => {
      next(err);
    };
  }
});

export default router;
