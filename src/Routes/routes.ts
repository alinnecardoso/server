import express from 'express'
import instrumentsRoute from '../Routes/instruments';
import suppliersRoute from '../Routes/suppliers';

const routes =  express.Router();

routes.use(instrumentsRoute);
routes.use(suppliersRoute);

export default routes;