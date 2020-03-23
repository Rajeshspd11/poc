//core modules
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


//custom modules
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/products');
const index = require('./homePage');
const detailsRoutes = require('./routes/details');
const loginRoutes = require('./routes/login');
const errorRoutes = require('../src/routes/errorRoutes')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: "thesecretsession",
    resave: false,
    saveUninitialized: false
}));

app.use('/home', homeRoutes);
app.use('/details', detailsRoutes);
app.use('/products', adminRoutes);
app.use('/login', loginRoutes);
app.use('/index', index);
app.use('/', errorRoutes);

app.listen(3001);