import ClientRepository from "../respositories/ClientRepository";
import { Request, Response } from "express";

interface IClient{
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
}

export default new ClientsController;