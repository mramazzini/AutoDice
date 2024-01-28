"use server";

import login from "@/actions/login";
import { generateToken } from "@/app/utils/auth";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userData = await login({ email, password });
    const token = await generateToken(userData.id);

    return Response.json({
      token,
    });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}
