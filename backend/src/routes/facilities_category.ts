import { Router } from "express";
import {
  deleteFacilityCategory,
  getFacilityCategoryList,
  getOneFacilityCategory,
  patchFacilityCategory,
  postFacilityCategory,
} from "../controllers/facilities_category";

const router = Router();

router.get("/facilities_category", getFacilityCategoryList);
router.get("/facilities_category/:facilityCategoryId", getOneFacilityCategory);
router.post("/facilities_category", postFacilityCategory);
router.patch("/facilities_category/:facilityCategoryId", patchFacilityCategory);
router.delete(
  "/facilities_category/:facilityCategoryId",
  deleteFacilityCategory
);

export default router;
