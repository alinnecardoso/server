import express from 'express';
import SalesController from '../app/controllers/SalesController'

const route =  express.Router();

route.get('/sales', SalesController.index)
route.get('/sales/:id', SalesController.show)
route.post('/sales', SalesController.store)
route.put('/sales/:id', SalesController.update)
route.delete('/sales/:id', SalesController.delete)

export default route;