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

const backgroundData: Background[] = [
  {
    id: 1,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Acolyte",
    description:
      "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.",
    skillChoiceCount: 2,
    skillChoices: [
      Skill.INSIGHT,
      Skill.RELIGION,
      Skill.INTIMIDATION,
      Skill.PERSUASION,
    ],
    languageChoiceCount: 2,
  },
];
export default backgroundData;
