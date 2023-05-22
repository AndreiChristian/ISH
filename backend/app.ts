import express from "express";
import propertiesRouter from "./src/routes/properties";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/api", propertiesRouter);

app.listen(3000);
