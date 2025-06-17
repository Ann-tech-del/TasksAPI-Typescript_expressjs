-- CreateTable
CREATE TABLE "tasks" (
    "ID" TEXT NOT NULL,
    "task_tittle" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("ID")
);
