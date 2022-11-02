// const { application } = require('express');
const express = require('express');
const app = express();
const studentsRouter = require('./routers/router');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('hello world'))

app.use('/api/v1/students', studentsRouter)

app.listen(port, () => console.log(`app listening on port ${port}`));