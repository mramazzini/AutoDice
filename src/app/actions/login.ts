"use server";
import { PrismaClient } from "@prisma/client";
export default async function login(formdata: {
  email: string;
  password: string;
}) {
  const { email, password } = formdata;
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = user.password === password;

  if (!passwordMatch) {
    throw new Error("Password incorrect");
  }

  return user;
}
