import express from "express";
import User from "../models/User.js";
import path from "path";
import { filePath } from "../lib/filePath.js";
export const getRegisterPage = (req, res) => {
  const path = filePath("public", "register.html");
  res.sendFile(path);
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // check if user already exist on the database
  try {
    const userExist = await User.findOne({ username: username });
    if (userExist) {
      res.status(200).json({ message: "User already Exist" });
    } else {
      const response = await User.create({
        username: username,
        password: password,
      });
      res.status(200).json({ response });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
