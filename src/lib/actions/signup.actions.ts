"use server";

import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { addDefaultContentPacksToUser } from "@/lib/actions/db/connect.actions";
import { generateToken } from "@/app/utils/auth";

export default async function signup(formdata: {
  email: string;
  password: string;
  username: string;
}) {
  const { email, password, username } = formdata;
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw new Error("User with this email already exists");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 8 characters");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: username,
    },
  });
  await addDefaultContentPacksToUser(newUser.id);
  const token = generateToken(newUser.id);
  return token;
}
