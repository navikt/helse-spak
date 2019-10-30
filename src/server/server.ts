import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import compression = require('compression');

import { commonResponseHeaders } from './headers';
import { routes } from './routes';

export default class Server {
    private app: express.Application;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.setup();
    }

    public start(): void {
        this.app.listen(this.port, () => {
            return console.log(`server is listening on ${this.port}`);
        });
    }

    private setup(): void {
        const devMode = process.env.NODE_ENV === 'development';
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(compression());
        commonResponseHeaders(this.app, devMode);
        routes(this.app, devMode);
    }
}
