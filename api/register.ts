import { connectDB } from "../lib/mongodb.js"
import User from "../models/User.js"
import bcrypt from "bcrypt"

export default async function handler(req: any, res: any) {

  if (req.method !== "POST") {
    return res.status(405).end()
  }

  await connectDB()

  const { name, email, password } = req.body

  const hashed = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashed
  })

  res.status(201).json({ message: "User created", user })
}