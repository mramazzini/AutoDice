-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "proficiencies" "Skill"[];

-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "backgroundId" INTEGER;

-- AlterTable
ALTER TABLE "Langauge" ADD COLUMN     "backgroundId" INTEGER;

-- AddForeignKey
ALTER TABLE "Langauge" ADD CONSTRAINT "Langauge_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;
