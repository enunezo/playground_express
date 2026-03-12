import { connectDB } from "../lib/mongodb.js"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default async function handler(req: any, res: any) {
  console.log("Login API called"),
  await connectDB()

  const { email, password } = req.body

  const user = await User.findOne({ email })
  console.log("User found:", user)
  if (!user) {
    return res.status(401).json({ message: "Invalid email" })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return res.status(401).json({ message: "Invalid password" })
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  )

  res.json({ token })
}