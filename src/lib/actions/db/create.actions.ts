import {
  Class,
  Background,
  Race,
  PrismaClient,
  Features,
} from '@prisma/client';
const db = new PrismaClient();

export const createClass = async (data: Class) => {
  'use server';
  console.log('Creating class:', data.name);
  const newClass = await db.class.create({
    data: {
      ...data,
    },
  });
  return newClass;
};

export const createBackground = async (data: Background) => {
  'use server';
  console.log('Creating background:', data.name);
  const newBackground = await db.background.create({
    data: {
      ...data,
    },
  });
  return newBackground;
};

export const createRace = async (data: Race) => {
  'use server';
  console.log('Creating race:', data.name);
  const newRace = await db.race.create({
    data: {
      ...data,
    },
  });
  return newRace;
};

export const createFeature = async (data: Features) => {
  'use server';
  console.log('Creating feature:', data.name);
  const newFeature = await db.features.create({
    data: {
      ...data,
    },
  });
  return newFeature;
};

export const createContentPack = async (data: {
  name: string;
  description: string;
  default: boolean;
}) => {
  'use server';
  console.log('Creating content pack:', data.name);
  const newContentPack = await db.contentPack.create({
    data: {
      ...data,
    },
  });
  return newContentPack;
};
