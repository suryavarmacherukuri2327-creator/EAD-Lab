import mongoose from "mongoose";

async function connectDB(uri) {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri, { dbName: "studentdb" });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

// Named and default export for compatibility with different import styles
export { connectDB };
export default connectDB;