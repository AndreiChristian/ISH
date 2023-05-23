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

router
  .route("/address")
  .get(getAddressList)
  .post(
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

router
  .route("/address/:addressId")
  .get(getOneAddress)
  .patch(
    [
      body("street").notEmpty().withMessage("Street is required"),
      body("number").notEmpty().withMessage("Number is required"),
      body("zip").notEmpty().withMessage("ZIP code is required"),
      body("city").notEmpty().withMessage("City is required"),
      body("state").optional(),
      body("country").notEmpty().withMessage("Country is required"),
    ],
    patchAddress
  )
  .delete(deleteAddress);

export default router;
