import express, { Express } from "express";
import dotenv from "dotenv";
import path from 'path'

dotenv.config({ path: "../.env" });

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));

app.use((req, res, next) => {
  console.log('User-Agent:', req.get('User-Agent'))
  return next()
});

const clientBuildPath = '../../client/dist'

app.use(express.static(path.join(__dirname, clientBuildPath)));
app.use(express.static(path.join(__dirname, '../static')))

//math all path from spa router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, clientBuildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});