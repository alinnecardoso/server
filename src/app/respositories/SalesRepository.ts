import db from '../../db/db';

class SalesRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Vendas
      `)

    return rows[0];
  }

  async create(){}

  async findById(){}

  async update(){}

  async delete(){}
}

export default new SalesRepository();