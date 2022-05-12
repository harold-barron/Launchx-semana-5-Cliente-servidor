/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `parameters` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "parameters" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "parameters_name_key" ON "parameters"("name");
