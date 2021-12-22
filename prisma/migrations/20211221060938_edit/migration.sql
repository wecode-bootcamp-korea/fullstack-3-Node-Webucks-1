/*
  Warnings:

  - You are about to drop the column `phone_number` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `policy_agreed` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `phone_number`,
    DROP COLUMN `policy_agreed`,
    ADD COLUMN `phoneNumber` VARCHAR(191) NULL,
    ADD COLUMN `policyAgreed` BOOLEAN NOT NULL DEFAULT true;
