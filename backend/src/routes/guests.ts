import { Router } from "express";
import { getGuestsList, getOneGuest, postGuest } from "../controllers/guests";

const router = Router();

router.get("/guests", getGuestsList);

router.get("/guests/:guestId", getOneGuest);

router.post("/guests", postGuest);

export default router;
