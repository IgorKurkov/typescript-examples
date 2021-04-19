import express from 'express';
import { NextFunction, Request, Response } from 'express';
import mainRouter from './routes/route';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  // res.send('Hello world!');
  res.status(200).json({ ok: true });
});
app.use('/api', mainRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
