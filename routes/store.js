import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("<h1>Test store</h1>");
});

export { router as storeRouter };
