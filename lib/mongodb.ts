import mongoose from "mongoose"
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI as string

if (!MONGO_URI) {
  throw new Error("MONGO_URI not defined")
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(MONGO_URI)
}