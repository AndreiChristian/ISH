import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import propertiesRouter from "./routes/properties";
import facilitiesRouter from "./routes/facility";
import regionsRouter from "./routes/region";
import adressRouter from "./routes/adress";
import guestsRouter from "./routes/guests";
import profilesRouter from "./routes/profiles";
import guestsProfilesRouter from "./routes/guests_profiles";
import employeesRouter from "./routes/employees";
import reservationsRouter from "./routes/reservation";
import profileFacilityRouter from "./routes/profile_facility";

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

app.use("/api", propertiesRouter);
app.use("/api", facilitiesRouter);
app.use("/api", regionsRouter);
app.use("/api", adressRouter);
app.use("/api", guestsRouter);
app.use("/api", profilesRouter);
app.use("/api", guestsProfilesRouter);
app.use("/api", employeesRouter);
app.use("/api", reservationsRouter);
app.use("/api", profileFacilityRouter);

app.listen(8080);
