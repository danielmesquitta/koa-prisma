/*
  Warnings:

  - A unique constraint covering the columns `[nick]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nick` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nick" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.nick_unique" ON "User"("nick");
