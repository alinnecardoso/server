import db from '../../db/db'

interface ISuppliers{
  nome: string;
  contato: string;
  telefone: string;
  email: string;
}

class SuppliersRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Fornecedores
      `)

    return rows[0];
  }

  async create({nome, contato, telefone, email}: ISuppliers){
    const row = await db.query(`
      INSERT INTO Fornecedores (nome, contato, telefone, email)
      VALUES (?,?,?,?)
      `, [nome, contato, telefone, email])
      return row[0];

  }
}

export default new SuppliersRepository();