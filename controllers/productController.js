import express from "express";
import Product from "../models/Products.js";
import { filePath } from "../lib/filePath.js";
export const getAllProducts = async (req, res) => {
  const { featured, company, price } = req.query;
  const queryObject = {};
  try {
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObject.company = { $regex: company, $options: "i" };
    }
    if (price) {
      switch (price) {
        case "10":
          queryObject.price = { $lte: 10 };
          break;
        case "50":
          queryObject.price = { $gt: 10, $lte: 50 };
          break;
        case "100":
          queryObject.price = { $gt: 50, $lte: 100 };
          break;
        case "500":
          queryObject.price = { $gt: 100, $lte: 500 };
          break;
        case "500000":
          queryObject.price = { $gt: 500 };
          break;
      }
    }
    const products = await Product.find(queryObject);
    return res.status(200).json({ products: products, len: products.length });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProdudct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, featured, rating, company } = req.body;

  try {
    const product = await Product.create({
      name: name,
      price: price,
      featured: featured,
      rating: rating,
      company: company,
    });
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const editProduct = async (req, res) => {
  const { name, price, featured, rating, company } = req.body;
  const { id } = req.params;

  try {
    const response = await Product.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        price: price,
        featured: featured,
        rating: rating,
        company: company,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
