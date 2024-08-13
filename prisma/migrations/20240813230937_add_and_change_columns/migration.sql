/*
  Warnings:

  - Added the required column `start_date` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendees" ADD COLUMN     "secret_friend" TEXT;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "done" BOOLEAN DEFAULT false,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;
