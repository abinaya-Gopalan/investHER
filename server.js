// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
app.use('/images', express.static('images'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8081);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('home');
});