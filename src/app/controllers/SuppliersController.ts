import { Request, Response } from "express";
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
    response.json(suppliers);
  }

  async store(request:Request, response:Response){
    const { nome, contato, telefone, email } : ISuppliers = request.body;
    const supplier = await SuppliersRepository.create({nome, contato, telefone, email});
    response.json(supplier);
  }
}

export default new SuppliersController();