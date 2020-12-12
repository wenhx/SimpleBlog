import { Request, Response } from 'express';

export default function authMiddleware(req: Request, res: Response, next: Function) {
    if (!!req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
}