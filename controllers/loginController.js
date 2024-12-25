import express from "express";
import User from "../models/User.js";
import { filePath } from "../lib/filePath.js";
//Server login page
export const getLoginPage = (req, res) => {
  const path = filePath("public", "login.html");
  res.sendFile(path);
};

// Check for credentials
export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkCreds = await User.findOne({
      username: username,
      password: password,
    });
    if (checkCreds) {
      res.status(200).send("<h1>Welcome </h1>");
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
