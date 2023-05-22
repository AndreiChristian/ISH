import express from "express";
import propertiesRouter from "./routes/properties";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api", propertiesRouter);

app.listen(3000);
