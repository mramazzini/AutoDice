/*
  Warnings:

  - Added the required column `backgroundId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cha` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `con` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dex` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipmentId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `int` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `str` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wis` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "backgroundId" INTEGER NOT NULL,
ADD COLUMN     "cha" INTEGER NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL,
ADD COLUMN     "con" INTEGER NOT NULL,
ADD COLUMN     "dex" INTEGER NOT NULL,
ADD COLUMN     "equipmentId" INTEGER NOT NULL,
ADD COLUMN     "int" INTEGER NOT NULL,
ADD COLUMN     "raceId" INTEGER,
ADD COLUMN     "str" INTEGER NOT NULL,
ADD COLUMN     "subClassId" INTEGER,
ADD COLUMN     "subRaceId" INTEGER,
ADD COLUMN     "wis" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subRaceId_fkey" FOREIGN KEY ("subRaceId") REFERENCES "SubRace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
