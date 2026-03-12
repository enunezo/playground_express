import { verifyToken } from "../lib/auth.js"

export default function handler(req: any, res: any) {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: "Not authenticated" })
  }

  const token = authHeader.split(" ")[1]

  const user = verifyToken(token)

  if (!user) {
    return res.status(401).json({ message: "Invalid token" })
  }

  res.json({ message: "Authorized", user })
}