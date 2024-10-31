import express from 'express';
import IntrumentsController from '../app/controllers/IntrumentsController'

const route =  express.Router();

route.get('/instruments', IntrumentsController.index)
route.post('/instruments', IntrumentsController.store)

export default route;