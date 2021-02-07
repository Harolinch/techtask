import { Application } from 'express';
import ExpressApp from './express.app';

class Server {
    private _app: Application;

    constructor(expressApp: Application) {
        this._app = expressApp;
    }


    listen(port: number, host="localhost") {
        this._app.listen(port, host, () => {
            console.log('Server is listening...');
        });
    }
}

new Server(ExpressApp).listen(4000);