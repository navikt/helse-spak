import express from 'express';
import bodyParser from 'body-parser';
import { setup as behandlinger } from './behandlinger/routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/isAlive', (req, res) => res.send('alive'));
app.get('/isReady', (req, res) => res.send('ready'));

app.use('/api/behandlinger', behandlinger());

app.use('/static', express.static('dist/client'));
app.use('/*', express.static('dist/client/index.html'));
app.use('/', express.static('dist/client/'));

app.listen(port, () => console.log(`Spak backend listening on port ${port}`));
