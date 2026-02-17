import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vaishalirawat:Vaishali1911@cluster0.sdas3jz.mongodb.net/DineNow?appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
};