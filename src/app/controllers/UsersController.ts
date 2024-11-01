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
    const idParser = parseInt(id);
    const user = await UsersRepository.findById(idParser);
    if(!user){
      response.status(404).json({ message: 'User not found' });
      return;
    }

    response.status(200).json(user);
  }

  async store(request:Request, response:Response){
    const { nome, email, senha } : IUser = request.body;
    const user = await UsersRepository.create({ nome, email, senha });
    response.status(201).json(user);
  }

  async update(request:Request, response: Response){}

  async delete(request:Request, response:Response){}
}

export default new UsersController;