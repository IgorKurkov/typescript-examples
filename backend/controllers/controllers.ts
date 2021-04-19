import { NextFunction, Request, Response } from 'express';

import { envName } from '../../src/config';
import { sendAsFile } from '../lib';

export const getFile = async (req: Request, res: Response, next: NextFunction) => {
  return sendAsFile(res);
};

export const getEnv = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ env: envName });
};
