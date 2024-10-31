-- CreateTable
CREATE TABLE `Instrumentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `tipo` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NULL,
    `modelo` VARCHAR(50) NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `quantidade` INTEGER NOT NULL DEFAULT 0,
    `descricao` VARCHAR(255) NULL,
    `data_aquisicao` DATE NULL,
    `status` ENUM('disponivel', 'vendido') NOT NULL DEFAULT 'disponivel',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `contato` VARCHAR(100) NULL,
    `telefone` VARCHAR(15) NULL,
    `email` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_instrumento` INTEGER NOT NULL,
    `data_venda` DATE NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco_total` DECIMAL(10, 2) NOT NULL,
    `id_fornecedor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(15) NULL,
    `email` VARCHAR(100) NULL,
    `rua` VARCHAR(100) NULL,
    `numero` VARCHAR(10) NULL,
    `complemento` VARCHAR(50) NULL,
    `bairro` VARCHAR(50) NULL,
    `cidade` VARCHAR(50) NULL,
    `estado` VARCHAR(50) NULL,
    `cep` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_instrumento_fkey` FOREIGN KEY (`id_instrumento`) REFERENCES `Instrumentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_fornecedor_fkey` FOREIGN KEY (`id_fornecedor`) REFERENCES `Fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
