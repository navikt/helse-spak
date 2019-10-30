import express = require('express');

const styleSource: string = 'https://fonts.googleapis.com';
const fontSource = 'https://fonts.gstatic.com';
const cspString = `default-src 'self' data:; style-src 'self' ${styleSource} data: 'unsafe-inline'; connect-src 'self'; font-src ${fontSource} 'self' data:`;

export const commonResponseHeaders = (app: express.Application, devMode: boolean): void => {
    app.disable('x-powered-by');
    app.use((_, res, next) => {
        res.header('X-Frame-Options', 'DENY');
        res.header('X-Xss-Protection', '1; mode=block');
        res.header('X-Content-Type-Options', 'nosniff');
        res.header('Referrer-Policy', 'no-referrer');

        res.header('Content-Security-Policy', cspString);
        res.header('X-WebKit-CSP', cspString);
        res.header('X-Content-Security-Policy', cspString);

        res.header('Feature-Policy', "geolocation 'none'; microphone 'none'; camera 'none'");
        if (devMode) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:1234');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, nav-person-id'
            );
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
        }
        next();
    });
}
