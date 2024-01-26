const {
  PrismaClient,
  AbilityScore,
  Skill,
  WeaponCategory,
  ArmorCategory,
} = require("@prisma/client");

const prisma = new PrismaClient();

const classSeed = async () => {
  console.log("Seeding classes...");
  await prisma.class.createMany({
    data: [
      {
        name: "Barbarian",
        description:
          "A fierce warrior of primitive background who can enter a battle rage",
        hitDie: 12,
        primaryAbility: AbilityScore.STR,
        savingThrows: [AbilityScore.STR, AbilityScore.CON],
        skillChoiceCount: 2,
        skillChoices: [
          Skill.Athletics,
          Skill.AnimalHandling,
          Skill.Intimidation,
          Skill.Nature,
          Skill.Perception,
          Skill.Survival,
        ],
        weaponProficiencies: [WeaponCategory.Simple, WeaponCategory.Martial],
        armorProficiencies: [
          ArmorCategory.Light,
          ArmorCategory.Medium,
          ArmorCategory.Shield,
        ],
      },
      {
        name: "Bard",
        description:
          "An inspiring magician whose power echoes the music of creation",
        hitDie: 8,
        primaryAbility: AbilityScore.CHA,
        savingThrows: [AbilityScore.DEX, AbilityScore.CHA],
        skillChoiceCount: 3,
        skillChoices: [
          Skill.Athletics,
          Skill.Arcana,
          Skill.Deception,
          Skill.History,
          Skill.Insight,
          Skill.Intimidation,
          Skill.Investigation,
          Skill.Medicine,
          Skill.Nature,
          Skill.Perception,
          Skill.Performance,
          Skill.Persuasion,
          Skill.Religion,
          Skill.SleightOfHand,
          Skill.Stealth,
          Skill.Survival,
        ],
        weaponProficiencies: [WeaponCategory.Simple],
        armorProficiencies: [ArmorCategory.Light],
      },
      {
        name: "Cleric",
        description:
          "A priestly champion who wields divine magic in service of a higher power",
        hitDie: 8,
        primaryAbility: AbilityScore.WIS,
        savingThrows: [AbilityScore.WIS, AbilityScore.CHA],
        skillChoiceCount: 2,
        skillChoices: [
          Skill.History,
          Skill.Insight,
          Skill.Medicine,
          Skill.Persuasion,
          Skill.Religion,
        ],
        weaponProficiencies: [WeaponCategory.Simple],
        armorProficiencies: [
          ArmorCategory.Light,
          ArmorCategory.Medium,
          ArmorCategory.Shield,
        ],
      },
      {
        name: "Druid",
        description:
          "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
        hitDie: 8,
        primaryAbility: AbilityScore.WIS,
        savingThrows: [AbilityScore.INT, AbilityScore.WIS],
        skillChoiceCount: 2,
        skillChoices: [
          Skill.Arcana,
          Skill.AnimalHandling,
          Skill.Insight,
          Skill.Medicine,
          Skill.Nature,
          Skill.Perception,
          Skill.Religion,
          Skill.Survival,
        ],
        weaponProficiencies: [WeaponCategory.Simple, WeaponCategory.Martial],
        armorProficiencies: [
          ArmorCategory.Light,
          ArmorCategory.Medium,
          ArmorCategory.Shield,
        ],
      },
      {
        name: "Fighter",
        description:
          "A master of martial combat, skilled with a variety of weapons and armor",
        hitDie: 10,
        primaryAbility: AbilityScore.STR,
        savingThrows: [AbilityScore.STR, AbilityScore.CON],
        skillChoiceCount: 2,
        skillChoices: [
          Skill.Acrobatics,
          Skill.AnimalHandling,
          Skill.Athletics,
          Skill.History,
          Skill.Insight,
          Skill.Intimidation,
          Skill.Perception,
          Skill.Survival,
        ],
        weaponProficiencies: [WeaponCategory.Simple, WeaponCategory.Martial],
        armorProficiencies: [
          ArmorCategory.Light,
          ArmorCategory.Medium,
          ArmorCategory.Heavy,
          ArmorCategory.Shield,
        ],
      },
    ],
  });
};
module.exports = classSeed;
