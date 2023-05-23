import { NextFunction, Request, Response, Router } from "express";
import {
  deleteFacility,
  getFacilityList,
  getOneFacility,
  patchFacility,
  postFacility,
} from "../controllers/facility";

const router = Router();


router.get("/facilities", getFacilityList);

router.get("facilities/:facilityId", getOneFacility);

router.post("/facilities", postFacility);

router.patch("/facilities/:facilityId", patchFacility);

router.delete("/facilities/:facilityId", deleteFacility);

export default router;
