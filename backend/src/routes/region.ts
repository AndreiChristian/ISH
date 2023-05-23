import { NextFunction, Request, Response, Router } from "express";
import {
  deleteRegion,
  getOneRegion,
  getRegionList,
  patchRegion,
  postRegion,
} from "../controllers/region";

const router = Router();

router.get("/regions", getRegionList);

router.get("/regions/:regionId", getOneRegion);

router.post("/regions", postRegion);

router.patch("/regions", patchRegion);

router.delete("/regions", deleteRegion);

export default router;
