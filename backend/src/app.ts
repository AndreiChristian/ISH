import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import propertiesRouter from "./routes/properties";
import facilitiesRouter from "./routes/facility";
import regionsRouter from "./routes/region";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// app.use("/api", propertiesRouter);
app.use("/api", facilitiesRouter);
app.use("/api", regionsRouter);

app.get("/", (req, res, next) => {
  res.json({
    message: "hello",
  });
});

app.listen(8080);
