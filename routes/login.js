import express from "express";
import {
  authenticateUser,
  getLoginPage,
} from "../controllers/loginController.js";
const router = express.Router();

router.route("/").get(getLoginPage);
router.route("/").post(authenticateUser);
export { router as loginRouter };
