require('dotenv').config();
const express = require('express');
const { mainRouter } = require('./routes/_index');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cross origin resource sharing
app.use(cors());

// base route
app.use('/api/v1', mainRouter);

// testing router ----------------------
app.get('/test', (req, res) => {
  res.send('Hello from the backend!');
});

// local server----------------------
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});