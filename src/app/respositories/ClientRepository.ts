import db from '../../db/db'

interface IClient{
  nome:string;
  telefone:string;
  email:string;
  rua:string;
  numero:string
  complemento:string;
  bairro:string;
  cidade:string;
  estado:string;
  cep:string;
}

class ClientRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Clientes
      `)

    return rows[0];
  }

  async create({
    nome,
    telefone,
    email,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep
  }: IClient){
    const row = await db.query(`
      INSERT INTO Clientes (nome, telefone, email, rua, numero, complemento, bairro, cidade, estado, cep)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, telefone, email, rua, numero, complemento, bairro, cidade, estado, cep]
    )

    return row[0];
  }
}

export default new ClientRepository;