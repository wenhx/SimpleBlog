import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import path from "path";
import { createConnection } from "typeorm";
import indexRouter from "./routers/index";
import authRouter from "./routers/auth";
import * as util from "./util";
import webPageObjectMiddleware from "./middlewares/webPageObjectMiddleware";
import authMiddleware from "./middlewares/authMiddleware";

const app = express();
const port = 8081;

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "assets")));
app.use(express.urlencoded({ extended: false, limit: "1mb" }));
app.use(cookieParser("simple-blog"));
app.use(session({ secret: "simple-blog", saveUninitialized: true, resave: true }));
app.use(flash());
app.use(webPageObjectMiddleware);
app.use(authMiddleware);

app.use("/", indexRouter);
app.use("/auth", authRouter);

createConnection().then(connection => {
    app.listen(port, () => {
        console.log(`[${util.getDateTime()}, server]: Server is running at http://localhost:${port}`);
    });
}).catch(error => console.log("TypeORM connection error: ", error));