import InstrumentsRepository from '../respositories/InstrumentsRepository'
import { Request, Response } from 'express';

interface IInstruments{
  nome: string;
  tipo: string;
  marca?: string; // Opcional
  modelo?: string; // Opcional
  preco: number;
  quantidade: number;
  descricao?: string; // Opcional
  data_aquisicao: string; // Use Date para tratar datas
  status: 'disponível' | 'vendido'; // Limitar aos valores do ENUM
}

class InstrumentController {
  async index(_request: Request, response: Response){
    const instruments = await InstrumentsRepository.findAll();

    response.json(instruments);
  }

  async store(request:Request, response: Response){
    const { nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status } : IInstruments = request.body;
    const newInstrument = await InstrumentsRepository.create({
      nome,
      tipo,
      marca,
      modelo,
      preco,
      quantidade,
      descricao,
      data_aquisicao: new Date(data_aquisicao), // Converte a string de data em objeto Date
      status,
    });
    response.status(201).json(newInstrument);
  }
}

export default new InstrumentController;