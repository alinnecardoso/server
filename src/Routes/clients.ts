import express from 'express';
import ClientsController from '../app/controllers/ClientsController'

const route =express.Router();

route.get('/clients', ClientsController.index)
route.post('/clients',  ClientsController.store)

export default route;