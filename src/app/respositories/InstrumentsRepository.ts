import db from '../../db/db'

class InstrumentRepository {
  async findAll(){
    const rows = await db.query(`
      SELECT Instrumentos.* Instrumentos.nome AS nome_instrumento
      FROM Intrumentos
      `)

    return rows;
  }
}

export default new InstrumentRepository;