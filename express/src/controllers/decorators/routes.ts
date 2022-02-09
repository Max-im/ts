import 'reflect-metadata';
import { Methods } from './Methods';
import {MetadataKeys} from './MetadataKeys';
import { RequestHandler } from 'express';

interface RoutePropDescription extends PropertyDescriptor {
    value?: RequestHandler
}

const route = (method: string) => (path: string) => (target: any, key: string, desc: RoutePropDescription) => {
    Reflect.defineMetadata(MetadataKeys.path, path, target, key);
    Reflect.defineMetadata(MetadataKeys.method, method, target, key);
}

export const get = route(Methods.get);
export const post = route(Methods.post);
export const put = route(Methods.put);
export const del = route(Methods.del);
export const patch = route(Methods.patch);