import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/isAlive', (req, res) => res.send('alive'));
app.get('/isReady', (req, res) => res.send('ready'));

app.get('/*', (req, res, next) => {
    if (!req.accepts('html') && /\/api/.test(req.url)) {
        console.debug(
            `Received a non-HTML request for '${req.url}', which didn't match a route`
        );
        res.sendStatus(404);
        return;
    }
    next();
});

// At the time of writing this comment, the setup of the static 'routes' has to be done in a particular order.
app.use('/static', express.static('dist/client'));
app.use('/*', express.static('dist/client/index.html'));
app.use('/', express.static('dist/client/'));

app.listen(port, () => console.log(`Spak backend listening on port ${port}`));
