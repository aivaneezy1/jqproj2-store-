import express from "express";
import dotenv from "dotenv";
import { notFound } from "./middleware/notFound.js";
import { connectDB } from "./config/connectDb.js";
import { storeRouter } from "./routes/store.js";
import { registerRouter } from "./routes/register.js";
import { loginRouter } from "./routes/login.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.static("./public"));
app.use(express.json());
const store = storeRouter;
app.use("/api/v1/store", store);
const register = registerRouter;
app.use("/register", register);
const login = loginRouter;
app.use("/login", login);

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
