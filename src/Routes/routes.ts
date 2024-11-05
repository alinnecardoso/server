import express from 'express'
import instrumentsRoute from '../Routes/instruments';
import suppliersRoute from '../Routes/suppliers';
import usersRoute from '../Routes/users'
import clientsRoute from '../Routes/clients'

import salesRoute from '../Routes/sales'
const routes =  express.Router();

routes.use(instrumentsRoute);
routes.use(suppliersRoute);
routes.use(clientsRoute);
routes.use(salesRoute);
routes.use(usersRoute);

export default routes;