"use server";
import db from "@/actions/db";
import { getUserId } from "@/app/utils/auth";
export async function GET(req: Request) {
  const userId = await getUserId();

  if (!userId) {
    return Response.json({ error: "User not found" });
  }

  const data = await db.contentPack.findMany({
    where: {
      userId,
    },
  });
  return Response.json(data);
}
