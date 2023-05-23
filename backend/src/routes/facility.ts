import { NextFunction, Request, Response, Router } from "express";
import {
  deleteFacility,
  getFacilityList,
  getOneFacility,
  patchFacility,
  postFacility,
} from "../controllers/facility";

const router = Router();

router.use("/facilities", (req: Request, res: Response, next: NextFunction) => {
  console.log("on the facilities route");
  next(req);
});

router.get("/", getFacilityList);

router.get("/:facilityId", getOneFacility);

router.post("/", postFacility);

router.patch("/:facilityId", patchFacility);

router.delete("/:facilityId", deleteFacility);

export default router;
