import { config } from 'dotenv';
import { Application } from 'express';
import ExpressApp from './express.app';
import mongoose from 'mongoose';

config();

class Server {
    private _app: Application;

    constructor(expressApp: Application) {
        this._app = expressApp;
    }

    async goLive(port: number, host = 'localhost') {
        try {
            await mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true })
            this.listen(port, host);
        } catch(err) {
            console.log(err.message);
        }
    }

    listen(port: number, host = "localhost") {
        this._app.listen(port, host, () => {
            console.log('Server is listening...');
        });
    }
}

new Server(ExpressApp).goLive(4000);