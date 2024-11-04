/*
  Warnings:

  - Added the required column `id_fornecedor` to the `Instrumentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Instrumentos` ADD COLUMN `id_fornecedor` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Instrumentos` ADD CONSTRAINT `Instrumentos_id_fornecedor_fkey` FOREIGN KEY (`id_fornecedor`) REFERENCES `Fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
