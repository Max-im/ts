import 'reflect-metadata';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function validateBody(keys: string[]): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            return res.status(422).send('Invalid request');
        }

        for (let key of keys) {
            if (!req.body[key]) {
                return res.status(422).send('Invalid request');
            }
        }

        next();
    }
}

export const controller = (routePrefix: string) => (target: Function) => {
    const router = AppRouter.getRouter();

    for (let key in target.prototype) {
        const handler = target.prototype[key];
        const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
        const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
        const bodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

        const validator = validateBody(bodyProps);

        if (path && method) router[method](`${routePrefix}${path}`, validator, ...middlewares, handler);
    }
}


