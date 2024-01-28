import {
  createRace,
  createBackground,
  createClass,
  createContentPack,
} from "@/actions/db/create";
import chalk from "chalk";
import { clearDB } from "./destroy";
import data from "@/seeds";
import { text } from "stream/consumers";

const { classData, backgroundData, raceData } = data;

chalk.level = 1;
const logblue = (text: string) => console.log(chalk.blue(text));
const loggreen = (text: string) => console.log(chalk.green(text));

export const seed = async () => {
  "use server";
  loggreen("\nRequest received to seed database...\n");

  logblue("Clearing database...\n");
  await clearDB();

  logblue("Seeding database...\n");

  logblue("Creating SRD ContentPack...\n");
  const pack = await createContentPack({
    name: "SRD ContentPack",
    description: "Free DND 5e content from the SRD",
    default: true,
  });
  const packId = pack.id;

  logblue("\nCreating classes...\n");
  for (let i = 0; i < classData.length; i++) {
    classData[i].contentPackId = packId;
    createClass(classData[i]);
  }

  logblue("\nCreating backgrounds...\n");
  for (let i = 0; i < backgroundData.length; i++) {
    backgroundData[i].contentPackId = packId;
    createBackground(backgroundData[i]);
  }

  logblue("\nCreating races...\n");
  for (let i = 0; i < raceData.length; i++) {
    raceData[i].contentPackId = packId;
    createRace(raceData[i]);
  }

  loggreen("\nSeeding complete!");
};
