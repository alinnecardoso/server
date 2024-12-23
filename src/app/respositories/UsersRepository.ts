import db from '../../db/db';

interface IUser{
  nome:string;
  email:string;
  senha: string;
}

class UsersRepository{
  async findAll(){
    const rows = await db.query(`
      SELECT *
      FROM Usuarios
      `)

    return rows[0];
  }

  async findById(id:string){
    const rows = await db.query(`
      SELECT *
      FROM Usuarios
      WHERE id = ?
      `, [id])
      return rows[0];
  }

  async findByEmail(email:string){
    const rows = await db.query(`
      SELECT *
      FROM Usuarios
      WHERE email = ?
      `, [email])
      return rows[0];
  }

  async create({nome, email, senha} : IUser){
    const rows = await db.query(`
      INSERT INTO Usuarios (nome, email, senha)
      VALUES (?, ?, ?)
      `, [nome, email, senha])
        return rows[0];
  }

  async update(id:string, {nome, email, senha} : IUser){
    const rows = await db.query(`
      UPDATE Usuarios
      SET nome = ?, email = ?, senha = ?
      WHERE id = ?
      `, [nome, email, senha, id])
      return rows[0];
  }

  async delete(id:string){
    const rows = await db.query(`
      DELETE FROM Usuarios
      WHERE id = ?
      `, [id])
      return rows[0];
  }
}

export default new UsersRepository;