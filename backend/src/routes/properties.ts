import { Router } from "express";
import {
  deleteProperty,
  getPropertiesList,
  getOneProperty,
  patchProperty,
  postProperty,
} from "../controllers/property";
import { body, param } from 'express-validator';

const router = Router();

router.route("/property")
  .get(getPropertiesList)
  .post(
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('address_id').isInt().withMessage('Address ID must be an integer'),
      body('region_id').isInt().withMessage('Region ID must be an integer'),
      body('description').optional().isString(),
      body('price').isNumeric().withMessage('Price must be a numeric value'),
      body('rating').optional().isNumeric().withMessage('Rating must be a numeric value'),
    ],
    postProperty
  );

router.route("/property/:propertyId")
  .get(
    param('propertyId').isInt().withMessage('Property ID must be an integer'),
    getOneProperty
  )
  .patch(
    [
      param('propertyId').isInt().withMessage('Property ID must be an integer'),
      body('name').optional().notEmpty().withMessage('Name is required when provided'),
      body('address_id').optional().isInt().withMessage('Address ID must be an integer when provided'),
      body('region_id').optional().isInt().withMessage('Region ID must be an integer when provided'),
      body('description').optional().isString(),
      body('price').optional().isNumeric().withMessage('Price must be a numeric value when provided'),
      body('rating').optional().isNumeric().withMessage('Rating must be a numeric value when provided'),
    ],
    patchProperty
  )
  .delete(
    param('propertyId').isInt().withMessage('Property ID must be an integer'),
    deleteProperty
  );

export default router;
