import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { filePath } from "../lib/filePath.js";
//Server login page
export const getLoginPage = (req, res) => {
  const path = filePath("public", "login.html");
  return res.sendFile(path);
};

// Check for credentials
export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(402).json({ message: "Please fill in all fields" });
  }
  try {
    const checkCreds = await User.findOne({
      username: username,
      password: password,
    });
    if (checkCreds) {
      // JWT TOKEN
      const accessToken = jwt.sign(
        { userId: checkCreds._id },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        userId: checkCreds._id,
        username: username,
        accessToken: accessToken,
      });
    } else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
