import express from "express";
import dotenv from "dotenv";
import { notFound } from "./middleware/notFound.js";
import { connectDB } from "./config/connectDb.js";
import { productRouter } from "./routes/products.js";
import { registerRouter } from "./routes/register.js";
import { userRouter } from "./routes/user.js";
import { loginRouter } from "./routes/login.js";
import { adminRouter } from "./routes/admin.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.static("./public"));
app.use(express.json());
// middleware routes
const products = productRouter;
app.use("/api/v1/products", products);
const register = registerRouter;
app.use("/api/auth/register", register);
const login = loginRouter;
app.use("/api/auth/login", login);
const user = userRouter;
app.use("/api/user", user);
const admin = adminRouter;
app.use("/api/admin", admin);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Listening to port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
