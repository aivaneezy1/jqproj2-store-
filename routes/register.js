import express from "express";
import {
  getRegisterPage,
  createUser,
} from "../controllers/registerController.js";

const router = express.Router();

router.route("/").get(getRegisterPage);
router.route("/").post(createUser);

export { router as registerRouter };
