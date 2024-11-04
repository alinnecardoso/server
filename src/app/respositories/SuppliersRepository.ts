import db from '../../db/db';

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
      INSERT INTO Fornecedores(nome, contato, telefone, email)
      VALUES (?,?,?,?)
      `, [nome, contato, telefone, email])
      return row[0];

  }

  async findByName(nome: string){
    const row = await db.query(`
      SELECT *
      FROM Fornecedores
      WHERE nome = ?
      `, [nome])
      return row[0];
  }

  async findById(id:number){
    const row = await db.query(`
      SELECT *
      FROM Fornecedores
      WHERE id = ?
      `, [id])
      return row[0];
  }

  async update(id:number, {nome, contato, telefone, email}: ISuppliers){
    const row = await db.query(`
      UPDATE Fornecedores
      SET nome = ?, contato = ?, telefone = ?, email = ?
      WHERE id = ?
      `, [nome, contato, telefone, email, id])
      return row[0];
  }

  async delete(id:number){
    const row = await db.query(`
      DELETE FROM Fornecedores
      WHERE id = ?
      `, [id])
      return row[0];
  }
}

export default new SuppliersRepository();