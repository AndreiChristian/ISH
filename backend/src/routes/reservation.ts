import { Router } from "express";
import {
  deleteReservation,
  getOneReservation,
  getReservationsList,
  patchReservation,
  postReservation,
} from "../controllers/reservation";

const router = Router();

router.get("/reservations", getReservationsList);
router.get("/reservations/:reservationId", getOneReservation);
router.post("/reservations", postReservation);
router.patch("/reservations/:reservationId", patchReservation);
router.delete("/reservations/:reservationId", deleteReservation);

export default router;
