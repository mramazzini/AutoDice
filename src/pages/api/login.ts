// api/login
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    password,
    email,
  }: {
    password: string;
    email: string;
  } = req.body;

  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({ message: "No user with that email" });
  }

  const passwordValid = password === user.password;

  if (passwordValid) {
    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid password" });
}
