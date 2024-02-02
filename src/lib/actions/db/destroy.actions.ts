import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
export const destroyClass = async (id: number) => {
  const classData = await db.class.findUnique({
    where: {
      id,
    },
  });

  if (!classData) {
    throw new Error('Class not found');
  }

  const deletedClass = await db.class.delete({
    where: {
      id,
    },
  });

  return deletedClass;
};

export const destroyBackground = async (id: number) => {
  const backgroundData = await db.background.findUnique({
    where: {
      id,
    },
  });

  if (!backgroundData) {
    throw new Error('Background not found');
  }

  const deletedBackground = await db.background.delete({
    where: {
      id,
    },
  });

  return deletedBackground;
};

export const destroyRace = async (id: number) => {
  const raceData = await db.race.findUnique({
    where: {
      id,
    },
  });

  if (!raceData) {
    throw new Error('Race not found');
  }

  const deletedRace = await db.race.delete({
    where: {
      id,
    },
  });

  return deletedRace;
};

//Probably should not be used in production
export const clearDB = async () => {
  await db.features.deleteMany({});
  await db.class.deleteMany({});
  await db.background.deleteMany({});
  await db.race.deleteMany({});
  await db.user.deleteMany({});
  await db.contentPack.deleteMany({});
};
