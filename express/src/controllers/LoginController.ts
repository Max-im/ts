import {Request, Response} from 'express';
import { get, controller, validateBody, post } from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
      res.send(`
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <button>Submit</button>
        </form>
      `);
    }

    @post('/login')
    @validateBody('email', 'password')
    postLogin(req: Request, res: Response) {
      const {email, password} = req.body;

      if (email && password) {
          req.session = {loggedIn: true};
          return res.redirect('/')
      } 
      res.sendStatus(402);
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}