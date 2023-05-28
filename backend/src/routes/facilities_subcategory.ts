import { Router } from "express";
import {
  deleteFacilitySubcategory,
  getFacilitySubcategoryList,
  getOneFacilitySubcategory,
  getOneFacilitySubcategoryByCategory,
  patchFacilitySubcategory,
  postFacilitySubcategory,
} from "../controllers/facilities_subcategory";

const router = Router();

router.get("/facilities_subcategory", getFacilitySubcategoryList);

router.get(
  "/facilities_subcategory/category/:categoryId",
  getOneFacilitySubcategoryByCategory
);

router.get(
  "/facilities_subcategory/:facilitySubcategoryId",
  getOneFacilitySubcategory
);
router.post("/facilities_subcategory", postFacilitySubcategory);
router.patch(
  "/facilities_subcategory/:facilitySubcategoryId",
  patchFacilitySubcategory
);
router.delete(
  "/facilities_subcategory/:facilitySubcategoryId",
  deleteFacilitySubcategory
);

export default router;
