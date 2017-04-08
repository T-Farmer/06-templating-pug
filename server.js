'use strict';

const express = require('express');
const app = express();

const pastries = [
  {
    'Name': 'Blueberry Muffin',
    'Price': '$2.00'
  },
  {
    'Name': 'Apple Turnover',
    'Price': '$1.50'
  },
  {
    'Name': 'Donut',
    'Price': '$1.00'
  },
  {
    'Name': 'Red Velvet Cake',
    'Price': '$2.50'
  },
  {
    'Name': 'Cheesecake',
    'Price': '$3.00'
  }
]

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
  let url = req.url
  res.render('index', {url})
});
app.get('/about', (req, res, next) => {
  let url = req.url
  let date = new Date()
  res.render('about', {url, date})
});
app.get('/inventory', (req, res, next) => {
  let url = req.url
  res.render('inventory', {pastries, url})
});

const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
});
