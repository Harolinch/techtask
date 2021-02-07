import Express, {Application} from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
const APP: Application = Express();

APP.use(cors.default());
APP.use(bodyParser.json());

export default APP;