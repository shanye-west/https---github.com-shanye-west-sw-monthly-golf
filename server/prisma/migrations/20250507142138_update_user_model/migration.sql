/*
  Warnings:

  - You are about to drop the column `pin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" 
ADD COLUMN "email" TEXT,
ADD COLUMN "name" TEXT,
ADD COLUMN "password" TEXT;

-- Update existing records
UPDATE "User"
SET 
  "email" = username || '@example.com',
  "name" = username,
  "password" = pin;

-- Make columns required
ALTER TABLE "User" 
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- Drop old columns
ALTER TABLE "User" 
DROP COLUMN "pin",
DROP COLUMN "username";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
