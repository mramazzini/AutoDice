/*
  Warnings:

  - You are about to drop the column `proficiencies` on the `Background` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "proficiencies",
ADD COLUMN     "skillProficiencies" "Skill"[];
