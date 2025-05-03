import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("mongodb error :", error);
  }
};
