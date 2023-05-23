import { Router } from "express";
import { getGuestsList, postGuest } from "../controllers/guests";

const router = Router();

router.get("/guests", getGuestsList);

router.post("/guests", postGuest);

export default router;
