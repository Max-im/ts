import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';


export const use = (middleware: RequestHandler) => (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, key);
}