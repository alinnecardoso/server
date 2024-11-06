import { Request, Response } from "express";
import SalesRepository from "../respositories/SalesRepository";

interface ISales{
  id_instrumento:number;
  data_venda:Date;
  quantidade:number;
  preco_total:number;
  id_cliente:number;
}

class SalesController{
  async index(_request: Request, response: Response){
    const sales = await SalesRepository.findAll();
    response.json(sales);
  }

  async show(request: Request, response: Response){}

  async store(request:Request, response:Response){
    const { id_instrumento, data_venda, quantidade, preco_total, id_cliente }:ISales = request.body;
    const sale = await SalesRepository.create({
      id_instrumento,
      data_venda: new Date(data_venda),
      quantidade,
      preco_total,
      id_cliente
    });
    response.json(sale);
  }

  async update(request:Request, response: Response){}

  async delete(request:Request, response:Response){
    const id = request.params.id;
    const idParser = parseInt(id);
    await SalesRepository.delete(idParser);
    response.status(204).send();
  }
}

export default new SalesController();