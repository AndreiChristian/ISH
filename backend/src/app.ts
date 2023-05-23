import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import propertiesRouter from "./routes/properties";
import facilitiesRouter from "./routes/facility";
import regionsRouter from "./routes/region";
import adressRouter from "./routes/adress";
import guestsRouter from "./routes/guests";
import profilesRouter from "./routes/profiles";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

// app.use("/api", propertiesRouter);
app.use("/api", facilitiesRouter);
app.use("/api", regionsRouter);
app.use("/api", adressRouter);
app.use("/api", guestsRouter);
app.use("/api", profilesRouter);

app.get("/", (req, res, next) => {
  res.json({
    message: "hello",
  });
});

app.listen(8080);
