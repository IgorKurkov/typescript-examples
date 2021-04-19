import { Response } from 'express';
import fs from 'fs';
import path from 'path';

export const sendAsFile = (res: Response) => {
  const pdfPath = path.join(__dirname, `/db.csv`);
  const data = fs.readFileSync(pdfPath);
  res.contentType('application/csv');
  return res.send(data);
};
