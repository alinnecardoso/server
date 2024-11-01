import express from 'express'
import instrumentsRoute from '../Routes/instruments';
import suppliersRoute from '../Routes/suppliers';

import salesRoute from '../Routes/sales'
const routes =  express.Router();

routes.use(instrumentsRoute);
routes.use(suppliersRoute);
routes.use(salesRoute);

export default routes;