import express from "express";
import propertiesRouter from "./routes/properties";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/roles", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM roles", []);

    if (!rows[0]) {
      throw new Error();
    }

    res.status(201).json(rows[0]);
  } catch {
    (err: Error) => console.error(err);
  }
});
app.use("/api", propertiesRouter);

app.listen(8080);
