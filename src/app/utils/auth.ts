import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
const expiration = "1h";
const secret = new TextEncoder().encode("STORE SECRET IN ENV");

export const generateToken = async (id: number) => {
  const jwt = await new SignJWT();
  const token = await jwt
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setSubject(id.toString())
    .setExpirationTime(expiration)
    .sign(secret);

  cookies().set("token", token, {
    maxAge: 60 * 60,
    httpOnly: true, // prevent client-side access
  });

  return token;
};
export const verifyToken = async (req: NextRequest) => {
  try {
    const token = cookies().get("token");

    if (!token) return false;

    const { payload } = await jwtVerify(token.value, secret);
    if (!payload) return false;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
