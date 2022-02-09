import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403).send('Auth required'); 
}

@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            return res.send(`
                <div>
                    <p>You are logged in</p>
                    <a href="/auth/logout">Logout</a>
                </div>
            `);
        }
        res.send(`
            <div>
                <p>You must login first</p>
                <a href="/auth/login">Login</a>
            </div>
        `);
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send(`protected data`);
    }
}