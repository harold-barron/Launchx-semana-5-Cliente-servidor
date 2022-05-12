/*
  Warnings:

  - Added the required column `enrollments` to the `newExplorerParameters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasCertification` to the `newExplorerParameters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newExplorerParameters" ADD COLUMN     "enrollments" INTEGER NOT NULL,
ADD COLUMN     "hasCertification" BOOLEAN NOT NULL;
