require('dotenv').config();

const connection = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const expresHandlebars = require('express-handlebars');
const bodyparsers = require('body-parser');
const Routes = require('./routes');

app.use(bodyparsers.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/task', Routes);
// app.set('views', path.join(__dirname, "/views"));

// app.engine("hbs", expresHandlebars({
//     extname: "hbs", defaultLayout: "mainLayout", layoutsDir:__dirname + "/views/layouts"
// }))

// app.set("view engine", "hbs");
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`))