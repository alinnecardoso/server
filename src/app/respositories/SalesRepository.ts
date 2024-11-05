import db from '../../db/db';

interface ISales{
  id_instrumento:number;
  data_venda:Date;
  quantidade:number;
  preco_total:number;
  id_cliente:number;
}

class SalesRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Vendas
      `)

    return rows[0];
  }

  async create({
    id_instrumento,
    data_venda,
    quantidade,
    preco_total,
    id_cliente
  }:ISales){
    const row = await db.query(`
      INSERT INTO Vendas (id_instrumento, data_venda, quantidade, preco_total,
      id_cliente)
      VALUES (?, ?, ?, ?, ?)
      `, [id_instrumento, data_venda, quantidade, preco_total, id_cliente])
      return row[0];
  }

  async findById(){}

  async update(){}

  async delete(){}
}

export default new SalesRepository();