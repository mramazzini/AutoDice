import { Class, Background, Race } from "@prisma/client";
import db from ".";

export const createClass = async (data: Class) => {
  "use server";
  console.log("Creating class:", data.name);
  const newClass = await db.class.create({
    data: {
      ...data,
    },
  });
  return newClass;
};

export const createBackground = async (data: Background) => {
  "use server";
  console.log("Creating background:", data.name);
  const newBackground = await db.background.create({
    data: {
      ...data,
    },
  });
  return newBackground;
};

export const createRace = async (data: Race) => {
  "use server";
  console.log("Creating race:", data.name);
  const newRace = await db.race.create({
    data: {
      ...data,
    },
  });
  return newRace;
};

export const createContentPack = async (data: {
  name: string;
  description: string;
  default: boolean;
}) => {
  "use server";
  console.log("Creating content pack:", data.name);
  const newContentPack = await db.contentPack.create({
    data: {
      ...data,
    },
  });
  return newContentPack;
};
