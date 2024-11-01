import { Request, Response } from "express";
import SuppliersRepository from '../respositories/SuppliersRepository'

class SuppliersController{
  async index(_request: Request,  response: Response){
    const suppliers = await SuppliersRepository.findAll();
    response.json(suppliers);
  }
}

export default new SuppliersController();