/*
  Warnings:

  - You are about to alter the column `name` on the `parameters` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- DropIndex
DROP INDEX "parameters_name_key";

-- AlterTable
ALTER TABLE "parameters" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);
