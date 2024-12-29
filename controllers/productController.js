import express from "express";
import Product from "../models/Products.js";
export const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  try {
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    const products = await Product.find(queryObject);
    return res.status(200).json(products);
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
  console.log(name, price, featured, rating, company);
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
