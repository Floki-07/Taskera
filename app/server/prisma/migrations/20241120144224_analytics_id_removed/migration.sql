/*
  Warnings:

  - You are about to drop the column `analyticsId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_analyticsId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "analyticsId";
