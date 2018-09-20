const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const port = 3000;
const url = 'mongodb://localhost:27017/edx-course-db';
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running. Hello world');
})


app.listen(port, () => console.log(`Server is running on ${port}`));