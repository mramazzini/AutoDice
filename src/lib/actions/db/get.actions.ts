'use server';
import { PrismaClient } from '@prisma/client';
import { getUserId } from '@/app/utils/auth';
const db = new PrismaClient();
export const contentPacks = () => {
  const data = db.contentPack.findMany();
  return data;
};

export const userContentPacks = async () => {
  const id = await getUserId();

  if (!id) {
    throw new Error('User not found');
  }

  const user = await db.user.findUnique({
    where: {
      id,
    },
    select: {
      contentPacks: true,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }
  let packs = [];
  for (const pack of user.contentPacks) {
    const data = await db.contentPack.findUnique({
      where: {
        id: pack.id,
      },
      include: {
        classes: true,
        backgrounds: true,
        monsters: true,
        spells: true,
        races: true,
        maps: true,
      },
    });
    packs.push(data);
  }

  return packs;
};
