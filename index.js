require('dotenv').config();

const connection = require('./model');
const express = require('express');
const app = express();
const bodyparsers = require('body-parser');
const Routes = require('./routes');
var cors = require('cors');

app.use(bodyparsers.urlencoded({
    extended: true
}));

app.use(cors());
app.use(express.json());

app.use('/task', Routes);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`))