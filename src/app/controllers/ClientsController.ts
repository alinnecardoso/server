import ClientRepository from "../respositories/ClientRepository";
import { Request, Response } from "express";

interface IClient{
  id:number;
  nome:string;
  telefone:string;
  email:string;
  rua:string;
  numero:string
  complemento:string;
  bairro:string;
  cidade:string;
  estado:string;
  cep:string;
}

class ClientsController {
  async index(_request:Request, response: Response){
    const clients = await ClientRepository.findAll();
    response.json(clients);
  }

  async show(request:Request, response:Response){
    const { id } = request.params;
    const idParser = parseInt(id);
    const client = await ClientRepository.findById(idParser);
    response.json(client);
  }

  async store(request:Request, response:Response){
    const  { nome, telefone, email, rua, numero, complemento, bairro, cidade, estado, cep } : IClient = request.body;
    const client = await ClientRepository.create({
      nome,
      telefone,
      email,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep
    });
    response.json(client);
  }

  async update(request:Request, response:Response){
    const { id } = request.params;
    const idParser = parseInt(id);
    const { nome, telefone, email, rua, numero, complemento, bairro, cidade
      , estado, cep } : IClient = request.body;
      const client = await ClientRepository.update(idParser, {
        nome,
        telefone,
        email,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep
        });
      response.json(client);
  }

  async delete(request:Request, response:Response){
    const { id } = request.params;
    const idParser = parseInt(id);
    await ClientRepository.delete(idParser);
    response.status(204).send();
  }
}

export default new ClientsController;