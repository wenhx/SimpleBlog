import session from "express-session";
import { User } from "../../src/entities/User";

export = session;

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
}