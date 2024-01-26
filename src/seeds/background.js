const { PrismaClient, Skill } = require("@prisma/client");
const prisma = new PrismaClient();

const backgroundSeed = async () => {
  console.log("Seeding backgrounds...");
  await prisma.background.createMany({
    data: [
      {
        name: "Acolyte",
        description:
          "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep inside you still hold the lessons of your faith close to your heart.",
        skillProficiencies: [Skill.Insight, Skill.Religion],
        languageChoice: 2,
      },
    ],
  });
};
module.exports = backgroundSeed;
