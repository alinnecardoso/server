import mysql from 'mysql2/promise';

// Configurações de conexão
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Am*060810',
    database: process.env.DB_NAME || 'estoque_instrumentos',
});

// Exporta a pool de conexões para uso em outros arquivos
export default connection;
