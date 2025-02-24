import express from "express";
import User from "../models/User.js";
export const userController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    return res.status(200).json({ id: user._id });
  } catch (err) {
    return res.status(401).json({ message: "Invalid Credentialssss" });
  }
};
