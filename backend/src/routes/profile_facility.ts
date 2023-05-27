import { Router } from "express";
import {
  deleteProfileFacility,
  getOneProfileFacility,
  getProfileFacilityList,
  patchProfileFacility,
  postProfileFacility,
} from "../controllers/profile_facility";

const router = Router();

router.get("/profile_facility", getProfileFacilityList);
router.get("/profile_facility/:profileId/:facilityId", getOneProfileFacility);
router.post("/profile_facility", postProfileFacility);
router.patch("/profile_facility/:profileId/:facilityId", patchProfileFacility);
router.delete(
  "/profile_facility/:profileId/:facilityId",
  deleteProfileFacility
);

export default router;
