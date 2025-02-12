import express, { Express } from "express";
import dotenv from "dotenv";
import path from 'path'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(require('prerender-node'));

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});