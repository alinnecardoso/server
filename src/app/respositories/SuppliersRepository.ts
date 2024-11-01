import db from '../../db/db'

class SuppliersRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Fornecedores
      `)

    return rows[0];
  }
}

export default new SuppliersRepository();