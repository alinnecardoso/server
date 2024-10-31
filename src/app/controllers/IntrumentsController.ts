import InstrumentsRepository from '../respositories/InstrumentsRepository'
import { Request, Response } from 'express';

class IntrumentController {
  async index(_request: Request, response: Response){
    const instruments = await InstrumentsRepository.findAll();

    response.json(instruments);
  }
}

export default new IntrumentController;