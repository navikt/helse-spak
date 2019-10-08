import fs from 'fs';
import { Router } from 'express';
import { StringDecoder } from 'string_decoder';

const router = Router();
const decoder = new StringDecoder('utf-8');

interface Routes {
    router: Router;
}

const routes = ({ router }: Routes) => {
    router.get('/', (req, res) => {
        fs.readFile('__mock-data__/behandlinger.json', (err, data) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                const decodedData = decoder.write(data);
                res.header('Content-Type', 'application/json');
                res.send(JSON.parse(decodedData));
            }
        });
    });
};

export const setup = () => {
    routes({ router });
    return router;
};
