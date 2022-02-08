import {Router, Request, Response, NextFunction} from 'express';

interface RequestWithBody extends Request {
    body: {[key: string]: string | undefined};
}

function requireAuth(req: RequestWithBody, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403).send('Auth required'); 
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
    if (req.session && req.session.loggedIn) {
        return res.send(`
            <div>
                <p>You are logged in</p>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    res.send(`
        <div>
            <p>You must login first</p>
            <a href="/login">Login</a>
        </div>
    `);
});

router.get('/logout', (req: RequestWithBody, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <div>
        <form method="POST">
            <div>
                <label>
                    Email
                    <input name="email" type="email"/>
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input name="password" type="password"/>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    `)
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body;
    console.log(email, password, email && password)
    if (email && password) {
        req.session = {loggedIn: true};
        return res.redirect('/')
    } 
    res.sendStatus(402);
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
    res.send(`protected data`);
});

export { RequestWithBody, router };