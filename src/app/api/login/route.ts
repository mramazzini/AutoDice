"use server";

import login from "@/lib/actions/login.actions";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") || "";
  const password = searchParams.get("password") || "";
  try {
    const res = await login({ email, password });
    return Response.json(res);
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}
