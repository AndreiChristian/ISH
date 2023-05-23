import { Router } from "express";
import { getProfilesList, postProfile } from "../controllers/profiles";

const router = Router();

router.get("/profiles", getProfilesList);

router.post("/profiles", postProfile);

export default router;
