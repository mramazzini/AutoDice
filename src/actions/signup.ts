"use server";
import db from "./db";
import bcrypt from "bcrypt";
import { addDefaultContentPacksToUser } from "./db/connect";
export default async function signup(formdata: {
  email: string;
  password: string;
  username: string;
}) {
  const { email, password, username } = formdata;

  const user = await db.user.findUnique({
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
  const newUser = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name: username,
    },
  });
  await addDefaultContentPacksToUser(newUser.id);
  return newUser;
}
