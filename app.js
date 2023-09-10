import express from 'express';

const app = express();

const port = 3000;

app.use('/', taskRouter);

app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
})