/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Request, Response } from 'express';
import * as randomstring from 'randomstring';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to rickandroll!!!' });
});

app.get('/api/shorturl', (req: Request, res: Response) => {
  const randomString = randomstring.generate(6);
  return res.json({ url: `http://localhost:3333/api/${randomString}`})
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
