import express = require('express');

export const routes = (app: express.Application, devMode: boolean):void => {
    app.get('/', function(_, res) {
        res.send('Hello World');
    });
}