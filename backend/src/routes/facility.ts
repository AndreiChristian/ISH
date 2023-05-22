import { Router } from "express";
import { getFacilityList } from "../controllers/facility";

const router = Router();

router.get("/");

router.get("/:facilityId", getFacilityList );

router.post("/");

router.patch("/:facilityId");

router.delete("/:facilityId");

export default router;
