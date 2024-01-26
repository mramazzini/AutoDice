const { PrismaClient, Alignment, Size } = require("@prisma/client");
const prisma = new PrismaClient();

const raceSeed = async () => {
  console.log("Seeding races...");
  await prisma.race.createMany({
    data: [
      {
        name: "Dwarf",
        description:
          "A sturdy humanoid, standing about 4 feet tall, but broad and weighing as much as a human. They are known for their skill in warfare, their ability to withstand physical and magical punishment, their hard work, and their capacity for drinking ale.",
        alignment: Alignment.Lawful,
        size: Size.Medium,
        speed: 25,
        darkVision: 60,
      },
      {
        name: "Elf",
        description:
          "A slender humanoid, usually taller than a human, with a lifespan of several centuries. They are known for their grace and mastery of magic and weapons such as the sword and bow.",
        alignment: Alignment.ChaoticGood,
        size: Size.Medium,
        speed: 30,
        darkVision: 60,
      },
      {
        name: "Halfling",
        description:
          "A diminutive humanoid, standing about 3 feet tall, known for their resourcefulness and quick wits.",
        alignment: Alignment.LawfulGood,
        size: Size.Small,
        speed: 25,
        darkVision: 0,
      },
    ],
  });
};
module.exports = raceSeed;
