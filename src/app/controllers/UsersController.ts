import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import UsersRepository from '../respositories/UsersRepository';

interface IUser{
  nome:string;
  email:string;
  senha: string;
}

class UsersController {
  async index(_request: Request, response: Response){
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  async show(request: Request, response: Response){
    const { id } = request.params;
    const user = await UsersRepository.findById(id);
    if(!user){
      response.status(404).json({ message: 'User not found' });
      return;
    }

    response.status(200).json(user);
  }

  async store(request:Request, response:Response){
    const { nome, email, senha } : IUser = request.body;

    //Fazer a verificação se o email já existe
    const emailExists = await UsersRepository.findByEmail(email);
    if(!emailExists){
      response.status(400).json({ message: 'Email already exists' });
      return;
    }

    // Hashing da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await UsersRepository.create({ nome, email, senha: hashedPassword });
    response.status(201).json(user);


  }

  async update(request:Request, response: Response){
    const { id } = request.params;

    const { nome, email, senha } = request.body;

    const userExists = await UsersRepository.findById(id);
    if(!userExists){
      response.status(404).json({ message: 'User not found' });
      return;
    }

    if(!nome || !email || !senha){
      response.status(400).json({ message: 'All fields are required' });
      return;
    }

    const user = await UsersRepository.update(id,  { nome, email, senha });
    response.status(201).json(user);
  }

  async delete(request:Request, response:Response){
    const { id } = request.params;

    const userExists = await UsersRepository.findById(id);

    if(!userExists){
      response.status(404).json({ message: 'User not found' });
    }

    await UsersRepository.delete(id);
    response.status(204).json({ message: 'User deleted' });
  }

}

export default new UsersController;