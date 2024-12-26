import express from "express";
import { adminController } from "../controllers/adminController.js";
import { ensureAuthneticated } from "../middleware/ensureAuthenticated.js";
import { authorize } from "../middleware/authorize.js";
const router = express.Router();

router
  .route("/")
  .get(ensureAuthneticated, authorize(["admin"]), adminController);

export { router as adminRouter };
