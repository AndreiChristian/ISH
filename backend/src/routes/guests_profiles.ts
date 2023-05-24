import { Router } from "express";
import { getGuestProfilesList } from "../controllers/guests_profiles";

const router = Router();

router.get("/guests_profiles/:guestId", getGuestProfilesList);

router.get("/guests_profiles/:profileId");

router.post("/guests");

router.patch("/guests_profiles/:profileId");

router.delete("/guests_profiles/:profileId");

export default router;
