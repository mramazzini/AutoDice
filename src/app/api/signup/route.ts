import signup from "@/actions/signup";
import { generateToken } from "@/app/utils/auth";

import { NextRequest, NextResponse } from "next/server";

//For some reason, NextApiRequest doesn't have a json method in the typescript definition file so we have to add it ourselves
interface NextApiRequestWithJson extends NextRequest {
  json: () => Promise<any>;
}
export async function POST(req: NextApiRequestWithJson, res: NextResponse) {
  try {
    const { email, password, username } = await req.json();
    const userData = await signup({ email, password, username });
    const token = await generateToken(userData.id);

    return Response.json({
      token,
    });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}
