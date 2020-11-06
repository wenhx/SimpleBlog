import express from 'express';
import path from 'path';
import indexRouter from './routers/index';
import util from './util';

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'assets')));
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`[${util.getDateTime()}, server]: Server is running at http://localhost:${port}`);
});