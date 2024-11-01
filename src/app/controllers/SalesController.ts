import { Request, Response } from "express";
import SalesRepository from "../respositories/SalesRepository";

class SalesController{
  async index(_request: Request, response: Response){
    const sales = await SalesRepository.findAll();
    response.json(sales);
  }

  async show(request: Request, response: Response){}

  async store(request:Request, response:Response){}

  async update(request:Request, response: Response){}

  async delete(request:Request, response:Response){}
}

export default new SalesController();