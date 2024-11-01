import express from 'express';
import InstrumentsController from '../app/controllers/IntrumentsController'

const route =  express.Router();

route.get('/instruments', InstrumentsController.index)
route.get('/instruments/:id', InstrumentsController.show)
route.post('/instruments', InstrumentsController.store)
route.put('/instruments/:id', InstrumentsController.update)
route.delete('/instruments/:id', InstrumentsController.delete)

export default route;