import express from 'express';
import ClientsController from '../app/controllers/ClientsController'

const route =express.Router();

route.get('/clients', ClientsController.index);
route.get('/clients/:id', ClientsController.show);
route.post('/clients',  ClientsController.store);
route.put('/clients/:id', ClientsController.update);
route.delete('/clients/:id', ClientsController.delete);

export default route;