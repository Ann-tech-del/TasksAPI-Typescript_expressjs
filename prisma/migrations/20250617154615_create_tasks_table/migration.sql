-- CreateTable
CREATE TABLE "tasksv2" (
    "ID" TEXT NOT NULL,
    "task_tittle" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasksv2_pkey" PRIMARY KEY ("ID")
);
