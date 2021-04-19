import express from 'express';
import { getEnv, getFile } from '../controllers/controllers';

const mainRouter = express.Router();

mainRouter.get('/', getFile);
mainRouter.get('/env', getEnv);

export default mainRouter;
