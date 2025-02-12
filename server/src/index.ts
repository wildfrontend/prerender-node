import express, { Express } from "express";
import dotenv from "dotenv";
import path from 'path'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(require('prerender-node').set('prerenderToken', 'a8YTe7HU60e2WEUnnmAA'));

app.use((req, res, next) => {
  console.log('User-Agent:',req.get('User-Agent'))
  return next()
});

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(express.static(path.join(__dirname, '../static')))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});