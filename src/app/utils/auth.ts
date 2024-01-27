import { sign, verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
const expiration = "1h";
const secret = "PUT SECRET IN ENV FILE";

export const generateToken = async (id: number) => {
  "use server";
  const token = sign({ id }, secret, { expiresIn: expiration });
  cookies().set("token", token, {
    maxAge: 60 * 60,
    httpOnly: true, // prevent client-side access
  });

  return token;
};
export const verifyToken = async (req: NextRequest) => {
  "use server";
  try {
    const token = req.cookies.getAll();
    console.log("token", token);

    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};
