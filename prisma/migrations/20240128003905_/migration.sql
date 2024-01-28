/*
  Warnings:

  - Added the required column `description` to the `ContentPack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContentPack" ADD COLUMN     "description" TEXT NOT NULL;
