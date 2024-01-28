<<<<<<<< HEAD:src/actions/login.ts
"use server";
import bcrypt from "bcrypt";
import db from "./db";
========
'use server';

import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

>>>>>>>> master:src/lib/actions/login.actions.ts
export default async function login(formdata: {
  email: string;
  password: string;
}) {
  const { email, password } = formdata;

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Password incorrect');
  }
  console.log(user);
  return user;
}
