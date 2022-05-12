-- CreateTable
CREATE TABLE "newExplorerParameters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionComander" VARCHAR(255) NOT NULL,

    CONSTRAINT "newExplorerParameters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newExplorerParameters_name_key" ON "newExplorerParameters"("name");
