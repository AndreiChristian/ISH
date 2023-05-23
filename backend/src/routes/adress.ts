import { Router } from "express";

import { body } from "express-validator";
import {
  deleteAddress,
  getAddressList,
  getOneAddress,
  patchAddress,
  postAddress,
} from "../controllers/adress";

const router = Router();

router.get("/address", getAddressList);

router.post(
  "/address",
  [
    body("street").notEmpty().withMessage("Street is required"),
    body("number").notEmpty().withMessage("Number is required"),
    body("zip").notEmpty().withMessage("ZIP code is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("state").optional(),
    body("country").notEmpty().withMessage("Country is required"),
  ],
  postAddress
);

router.get("/address/:addressId", getOneAddress);
router.patch(
  "/address/:addressId",
  [
    body("street").notEmpty().withMessage("Street is required"),
    body("number").notEmpty().withMessage("Number is required"),
    body("zip").notEmpty().withMessage("ZIP code is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("state").optional(),
    body("country").notEmpty().withMessage("Country is required"),
  ],
  patchAddress
);
router.delete("/address/:addressId", deleteAddress);

export default router;
