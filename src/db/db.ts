import mysql from 'mysql2';

// Configurações de conexão
const connection = mysql.createConnection({
    host: 'localhost', // ou o IP do servidor
    user: 'root',
    password: 'Am*060810',
    database: 'estoque_instrumentos'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

// Exporta a conexão para uso em outros arquivos
export default connection;
