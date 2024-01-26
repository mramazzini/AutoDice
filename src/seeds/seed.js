const backgroundSeed = require("./background");
const classSeed = require("./class");
const raceSeed = require("./race");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.background.deleteMany();
  await prisma.class.deleteMany();
  await prisma.race.deleteMany();

  backgroundSeed();
  classSeed();
  raceSeed();
};

seed();
