import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', UserController.store);
routes.get('/', (req, res) => {
  return res.status(200).json({ hello: 'api' });
});

export default routes;
