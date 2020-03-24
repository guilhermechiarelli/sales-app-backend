import { Router } from 'express';
import User from '../controllers/UserController';

const routes = new Router();

routes.post('/users', User.store);

export default routes;
