/*
  Warnings:

  - You are about to drop the `tasksv2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tasksv2";

-- CreateTable
CREATE TABLE "tasks" (
    "ID" TEXT NOT NULL,
    "task_tittle" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("ID")
);
