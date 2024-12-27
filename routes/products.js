import express from "express";
import {
  getAllProducts,
  getProdudct,
  createProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProdudct);
router.route("/").post(createProduct);

export { router as productRouter };
