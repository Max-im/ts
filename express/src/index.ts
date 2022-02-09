import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';

const app = express();
const appRouter = AppRouter.getRouter();
import './controllers/RoorController';
import './controllers/LoginController';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['string']}));
app.use(appRouter);

app.listen(3000, () => console.log('server run'))