import { request, Request, Response } from "express";
import SuppliersRepository from '../respositories/SuppliersRepository'

interface ISuppliers{
  nome: string;
  contato: string;
  telefone: string;
  email: string;
}

class SuppliersController{
  async index(_request: Request,  response: Response){
    const suppliers = await SuppliersRepository.findAll();
    response.status(200).json(suppliers);
  }

  async show(request: Request, response: Response){
    const { id }  = request.params;
    const idParser = parseInt(id);

    const supplier =  await SuppliersRepository.findById(idParser);
    if(!supplier){
      response.status(404).json({ message: 'Supplier not found' });
    }else{
      response.status(201).json(supplier);
    }

  }

  async store(request:Request, response:Response){
    const { nome, contato, telefone, email } : ISuppliers = request.body;

    // Validação nome
    if (!nome) {
      response.status(400).json({ message: 'Name is required' });
    }

    const supplier = await SuppliersRepository.create({nome, contato, telefone, email});
    response.status(201).json(supplier);
  }
}

export default new SuppliersController();