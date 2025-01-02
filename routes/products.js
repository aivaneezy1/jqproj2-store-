import express from "express";
import {
  getAllProducts,
  getProdudct,
  createProduct,
  editProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProdudct);
router.route("/").post(createProduct);
router.route("/:id").patch(editProduct);

export { router as productRouter };
