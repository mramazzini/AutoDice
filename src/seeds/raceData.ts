import {
  Race,
  Background,
  Class,
  ArmorTypes,
  WeaponTypes,
  AbilityScore,
  Alignment,
  Skill,
  Size,
} from "@prisma/client";

const raceData: Race[] = [
  {
    id: 1,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Dwarf",
    description:
      "A dwarf is a stout humanoid, usually a head shorter than their human counterparts, but much broader. They have ruddy or fair skin, and usually dark hair. They have very long lifespans, living well over 300 years.",
    age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    alignment: Alignment.LAWFUL_GOOD,
    size: Size.MEDIUM,
    speed: 25,
    darkVision: 60,
  },
  {
    id: 2,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Elf",
    description:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze.",
    age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    alignment: Alignment.CHAOTIC_GOOD,
    size: Size.MEDIUM,
    speed: 30,
    darkVision: 60,
  },
  {
    id: 3,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Halfling",
    description:
      "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife.",
    age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    alignment: Alignment.NEUTRAL_GOOD,
    size: Size.SMALL,
    speed: 25,
    darkVision: 60,
  },
];
export default raceData;
