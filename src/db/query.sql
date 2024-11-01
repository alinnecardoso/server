CREATE DATABASE estoque_instrumentos;
USE estoque_instrumentos;

CREATE TABLE Instrumentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT DEFAULT 0,
    descricao VARCHAR(255),
    data_aquisicao DATE,
    status ENUM('disponível', 'vendido') DEFAULT 'disponível'
);


CREATE TABLE Fornecedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(15),
    email VARCHAR(100)
);


CREATE TABLE Vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_instrumento INT,
    data_venda DATE NOT NULL,
    quantidade INT NOT NULL,
    preco_total DECIMAL(10, 2) NOT NULL,
    id_fornecedor INT,
    FOREIGN KEY (id_instrumento) REFERENCES Instrumentos(id),
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedores(id)
);


CREATE TABLE Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    cep VARCHAR(10)
);

CREATE TABLE Usuarios (
    id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);