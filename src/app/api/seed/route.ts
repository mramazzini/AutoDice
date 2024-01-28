import { seed } from "@/lib/actions/db/seed.actions";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (data.password != process.env.ADMIN_PASSWORD) {
      throw new Error("Incorrect password");
    }
    await seed();
    return Response.json({
      message: "Database seeded",
    });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}
