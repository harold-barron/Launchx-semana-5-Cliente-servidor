/*
  Warnings:

  - You are about to drop the `newExplorerParameters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "newExplorerParameters";

-- CreateTable
CREATE TABLE "parameters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionComander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL,

    CONSTRAINT "parameters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "parameters_name_key" ON "parameters"("name");
