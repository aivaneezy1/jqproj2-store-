import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    featured: { type: Boolean, default: false },
    rating: { type: Number, default: 4.5 },
    company: { type: String, enum: ["ikea", "liddy", "caressa", "marcos"] },
  },
  { timestamps: true }
);

const Product = mongoose.model.USER || mongoose.model("Product", ProductSchema);

export default Product;
