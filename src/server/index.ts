import Server from './server';

const port: number = parseInt(process.env.PORT || '3000');

new Server(port).start();
