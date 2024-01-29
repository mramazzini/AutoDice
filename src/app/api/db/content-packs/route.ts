'use server';

import { getUserId } from '@/app/utils/auth';
import data from '@/seeds';
import { contentPacks } from '@/lib/actions/db/get.actions';
export async function GET(req: Request) {
  const userId = await getUserId();

  if (!userId) {
    return Response.json({ error: 'User not found' });
  }

  const packs = await contentPacks();

  return Response.json(packs);
}
