import express from 'express';
import UsersController from '../app/controllers/UsersController';

const route =  express.Router();

route.get('/users', UsersController.index)
route.get('/users/:id', UsersController.show)
route.post('/users', UsersController.store)
route.put('/users/:id', UsersController.update)
route.delete('/users/:id', UsersController.delete)

export default route;