import { Router } from 'express';
import user from './app/routes/User';

const router = new Router();

router.use([user]);

export default router;
