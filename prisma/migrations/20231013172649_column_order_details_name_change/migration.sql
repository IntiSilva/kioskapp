/*
  Warnings:

  - You are about to drop the column `order_details` on the `order` table. All the data in the column will be lost.
  - Added the required column `orderDetails` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `order_details`,
    ADD COLUMN `orderDetails` JSON NOT NULL;
