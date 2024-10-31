import mysql from 'mysql2/promise';

// Configurações de conexão
const connection = mysql.createPool({
    host: 'localhost', // ou o IP do servidor
    user: 'root',
    password: 'Am*060810',
    database: 'estoque_instrumentos',
});

// Exporta a pool de conexões para uso em outros arquivos
export default connection;
