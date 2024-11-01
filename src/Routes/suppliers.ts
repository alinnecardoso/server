import express from 'express';
import SuppliersController from '../app/controllers/SuppliersController'

const route =  express.Router();

route.get('/suppliers', SuppliersController.index)

export default route;