import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
export default Connection;
