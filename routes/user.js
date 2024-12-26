import express from "express";
import { userController } from "../controllers/userController.js";
import { ensureAuthneticated } from "../middleware/ensureAuthenticated.js";
const router = express.Router();

router.route("/").get(ensureAuthneticated, userController);

export { router as userRouter };
