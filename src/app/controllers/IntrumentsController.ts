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
  id_fornecedor: number;
}

class InstrumentController {
  async index(_request: Request, response: Response){
    const instruments = await InstrumentsRepository.findAll();

    response.json(instruments);
  }

  async  show(request: Request, response: Response){
    const id = request.params.id;
    const idParser = parseInt(id);
    const instrument = await InstrumentsRepository.findById(idParser);

    if(!instrument){
      response.status(404).json({ message: 'Instrument not found' });
      return;
    }
    response.json(instrument);
  }

  async store(request:Request, response: Response){
    const { nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor } : IInstruments = request.body;

    if( !nome || !tipo || !preco || !quantidade || !data_aquisicao ){
      response.status(400).json({ error: "Campo obrigatório não preenchido" });
      return;
    }

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
      id_fornecedor,
    });
    response.status(201).json(newInstrument);
  }

  async update(request:Request, response: Response){
    const id = request.params.id;
    const idParser = parseInt(id);

    const { nome, tipo, marca, modelo, preco, quantidade, descricao, data_aquisicao, status, id_fornecedor } : IInstruments = request.body;

    const instrumentExists = await InstrumentsRepository.findById(idParser);

    if(!instrumentExists){
      response.status(404).json({ message: 'Instrument not found' });
      return;
    }

    const instrument = await InstrumentsRepository.update(idParser, {
      nome,
      tipo,
      marca,
      modelo,
      preco,
      quantidade,
      descricao,
      data_aquisicao: new Date(data_aquisicao),
      status,
      id_fornecedor,
    });

    response.json(instrument);
  }

  async  delete(request: Request, response: Response){
    const id = request.params.id;
    const idParser = parseInt(id);

    const instrumentExists = await InstrumentsRepository.findById(idParser);

    if(!instrumentExists){
      response.status(404).json({ message: 'Instrument not found' });
      return;
    }

    await InstrumentsRepository.delete(idParser);
    response.sendStatus(204);
  }
}

export default new InstrumentController();