const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors')
const axios = require('axios')
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const mongoose = require('mongoose');

// ----- Require routes ------
const index = require('./Routes/index');
const api = require('./Routes/api/index');

const app = express();

// DB Connection
mongoose.connect('mongodb://localhost/3dstore');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Parse request of content application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parser request of content application/json
app.use(bodyParser.json());

// Cookie-Parser
app.use(cookieParser());


// Webpack Server
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  status: {
    color: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));

// app.use(cors())

var categories = []
axios.get('https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json')
        .then(response => {
          // response.data.categories[0].models.forEach((e) => {animals.push(e)})})
          response.data.categories.forEach((e) => {
            categories.push(e)
          })})
          
app.get('/api/data', (req, res) => {
  res.send(categories)
})

app.get('/api/data/animals', (req, res) => {
  res.send(categories[0])
})
app.get('/api/data/foods', (req, res) => {
  res.send(categories[1])
})
app.get('/api/data/furniture', (req, res) => {
  res.send(categories[2])
})
app.get('/api/data/nature', (req, res) => {
  res.send(categories[3])
})
app.get('/api/data/technology', (req, res) => {
  res.send(categories[4])
})
app.get('/api/data/transport', (req, res) => {
  res.send(categories[5])
})

// ---- use routes----
app.use('/api/', api);
app.use('/*', index);


module.exports = app;