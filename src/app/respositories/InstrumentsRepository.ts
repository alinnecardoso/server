import db from '../../db/db';

// Definindo a interface para um instrumento
interface IInstrumento {
  nome: string;
  tipo: string;
  marca?: string; // Opcional
  modelo?: string; // Opcional
  preco: number;
  quantidade: number;
  descricao?: string; // Opcional
  data_aquisicao: Date; // Usando Date para representar datas
  status: 'disponível' | 'vendido'; // Usando ENUM para limitar os valores
  id_fornecedor: number;
}

class InstrumentRepository {
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Instrumentos
      `)

    return rows[0];
  }

  async findById(id:number){
    const rows = await db.query(`
      SELECT *
      FROM Instrumentos
      WHERE id = ?
      `, [id])
    return rows[0];
  }

  async create({nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor}: IInstrumento): Promise<IInstrumento>{
    const [row]: any = await db.query(
      `INSERT INTO Instrumentos(nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor]
    )

    return row[0];
  }

  async update(id:number, {nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor}: IInstrumento): Promise<IInstrumento>{
    const [row]: any = await db.query(`
      UPDATE Instrumentos
      SET nome = ?, tipo = ?, marca = ?, modelo = ?, preco = ?, quantidade = ?,
      descricao = ?, data_aquisicao = ?, status = ?, id_fornecedor = ?
      WHERE id = ?
      `, [nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor,id]);

      return row[0];
  }

  async delete(id:number) {
    await db.query(`
      DELETE FROM Instrumentos
      WHERE id = ?
      `, [id])
  }
}

export default new InstrumentRepository;