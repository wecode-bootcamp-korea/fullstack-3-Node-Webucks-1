/*
  Warnings:

  - You are about to drop the `likeBool` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `likeBool` DROP FOREIGN KEY `likeBool_drink_id_fkey`;

-- DropTable
DROP TABLE `likeBool`;
