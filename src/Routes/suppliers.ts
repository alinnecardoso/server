import express from 'express';
import SuppliersController from '../app/controllers/SuppliersController'

const route =  express.Router();

route.get('/suppliers', SuppliersController.index)
route.get('/suppliers/:id', SuppliersController.show)
route.post('/suppliers/:id', SuppliersController.store)
route.put('/suppliers/:id', SuppliersController.update)

export default route;