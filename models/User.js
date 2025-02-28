import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    password: { type: String, required: true, trim: true, minLength: 3 },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model.User || mongoose.model("User", UserSchema);

export default User;
