/*
  Warnings:

  - Added the required column `updated_at` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Fornecedores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Instrumentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Clientes` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Fornecedores` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Instrumentos` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `data_aquisicao` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Vendas` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
