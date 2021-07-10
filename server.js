require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3000;

// express midleware
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public/')));

app.use(routes);

// connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
