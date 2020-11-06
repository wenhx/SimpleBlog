import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello SimpleBlog!'));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});