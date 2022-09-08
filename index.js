const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const ussdroute = require('./Routes/ussdRoute');

app.get('/', (req, res) => {
  res.send('The first USSD app')
})
app.use(ussdroute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})