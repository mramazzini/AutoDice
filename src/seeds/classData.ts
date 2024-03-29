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

const classData: Class[] = [
  {
    id: 1,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Barbarian",
    description:
      "A fierce warrior of primitive background who can enter a battle rage",
    hitDie: 12,
    armorProficiencies: [
      ArmorTypes.LIGHT,
      ArmorTypes.MEDIUM,
      ArmorTypes.SHIELDS,
    ],
    weaponProficiencies: [WeaponTypes.SIMPLE, WeaponTypes.MARTIAL],
    savingThrows: [AbilityScore.STR, AbilityScore.CON],
    skillChoiceCount: 2,
    skillChoices: [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INTIMIDATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.SURVIVAL,
    ],
  },
  {
    id: 2,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Bard",
    description:
      "An inspiring magician whose power echoes the music of creation",
    hitDie: 8,
    armorProficiencies: [ArmorTypes.LIGHT],
    weaponProficiencies: [WeaponTypes.SIMPLE],
    savingThrows: [AbilityScore.DEX, AbilityScore.CHA],
    skillChoiceCount: 3,
    skillChoices: [
      Skill.ACROBATICS,
      Skill.ANIMAL_HANDLING,
      Skill.ARCANA,
      Skill.ATHLETICS,
      Skill.DECEPTION,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.PERFORMANCE,
      Skill.PERSUASION,
      Skill.RELIGION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ],
  },
  {
    id: 3,
    contentPackId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Cleric",
    description:
      "A priestly champion who wields divine magic in service of a higher power",
    hitDie: 8,
    armorProficiencies: [
      ArmorTypes.LIGHT,
      ArmorTypes.MEDIUM,
      ArmorTypes.SHIELDS,
    ],
    weaponProficiencies: [WeaponTypes.SIMPLE],
    savingThrows: [AbilityScore.WIS, AbilityScore.CHA],
    skillChoiceCount: 2,
    skillChoices: [
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.MEDICINE,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
  },
];

export default classData;
