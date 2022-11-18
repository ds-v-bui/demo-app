import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! This is a demo microservice');
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
