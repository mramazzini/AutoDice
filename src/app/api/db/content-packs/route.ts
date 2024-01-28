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
    include: {
      monsters: true,
      spells: true,
      classes: true,
      subClasses: true,
      backgrounds: true,
      races: true,
      feat: true,
      equipment: true,
      maps: true,
    },
  });
  return Response.json(data);
}
