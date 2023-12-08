import { PrismaClient } from "@prisma/client";
import bcryptjs from 'bcryptjs';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, name, phone, password } = req.body;

      const user = await prisma.user.create({
        data: {
          email,
          name,
          phone,
          password: await bcryptjs.hash(password, 10), // Hash password securely
        },
      });

      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      console.error(error);
      if (error.code === "P2002") {
        // Email already exists
        res.status(400).json({ message: "Email already exists" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
