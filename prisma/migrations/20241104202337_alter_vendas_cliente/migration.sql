/*
  Warnings:

  - You are about to drop the column `id_fornecedor` on the `Vendas` table. All the data in the column will be lost.
  - Added the required column `id_cliente` to the `Vendas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Vendas` DROP FOREIGN KEY `Vendas_id_fornecedor_fkey`;

-- AlterTable
ALTER TABLE `Vendas` DROP COLUMN `id_fornecedor`,
    ADD COLUMN `id_cliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
