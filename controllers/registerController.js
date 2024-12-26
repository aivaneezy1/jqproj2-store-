import express from "express";
import User from "../models/User.js";
import path from "path";
import { filePath } from "../lib/filePath.js";

//Render register.html page
export const getRegisterPage = (req, res) => {
  const path = filePath("public", "register.html");
  res.sendFile(path);
};

export const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(402).json({ message: "Please fill in all fields" });
  }
  // check if user already exist on the database
  try {
    const userExist = await User.findOne({ username: username });
    if (userExist) {
      return res.status(200).json({ message: "Username already Exist" });
    } else {
      const response = await User.create({
        username: username,
        password: password,
        role: role ? role : "user",
      });
      return res.status(200).json({ response });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
