import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(
      `Database is connected succesfully. Hostname: ${connect.connection.host} DBname:${connect.connect.name}`
    );
  } catch (err) {
    console.log(err);
  }
};
