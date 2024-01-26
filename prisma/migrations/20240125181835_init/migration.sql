/*
  Warnings:

  - Added the required column `languageChoice` to the `Background` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "languageChoice" INTEGER NOT NULL;
