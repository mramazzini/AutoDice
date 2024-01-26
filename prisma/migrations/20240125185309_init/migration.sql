/*
  Warnings:

  - You are about to drop the `Features` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `SubRace` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_classId_fkey";

-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_contentPackId_fkey";

-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_subClassId_fkey";

-- AlterTable
ALTER TABLE "Langauge" ADD COLUMN     "contentPackId" INTEGER;

-- AlterTable
ALTER TABLE "SubRace" ADD COLUMN     "contentPackId" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Traits" ADD COLUMN     "contentPackId" INTEGER;

-- DropTable
DROP TABLE "Features";

-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "subClassId" INTEGER,
    "contentPackId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Langauge" ADD CONSTRAINT "Langauge_contentPackId_fkey" FOREIGN KEY ("contentPackId") REFERENCES "ContentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_contentPackId_fkey" FOREIGN KEY ("contentPackId") REFERENCES "ContentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traits" ADD CONSTRAINT "Traits_contentPackId_fkey" FOREIGN KEY ("contentPackId") REFERENCES "ContentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubRace" ADD CONSTRAINT "SubRace_contentPackId_fkey" FOREIGN KEY ("contentPackId") REFERENCES "ContentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
