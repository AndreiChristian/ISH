import { NextFunction, Request, Response, Router } from "express";
import { db } from "../db";

const router = Router();

router.get(
  "/employees",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { rows } = await db.query(
        `SELECT e.id,
      e.first_name,
      e.last_name,
      e.phone_number,
      a.city,
      a.number,
      a.street,
      r.name AS region_name,
      roles.name AS department
  FROM employees AS e
      JOIN addresses AS a ON e.address_id = a.id
      JOIN region_employees AS re ON re.employee_id = e.id
      JOIN regions AS r ON re.region_id = r.id
      JOIN employee_roles as eroles ON e.id = eroles.employee_id
      JOIN roles AS roles ON eroles.role_id = roles.id`,
        []
      );

      if (!rows[0]) {
        throw new Error("no employees");
      }

      res.json(rows);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

export default router;
