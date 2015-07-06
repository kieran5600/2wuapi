'use strict'

// server.js
// load the things we need
var express = require('express');
var app = express();

//for css
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//This connects to our router, that is for reason important
require('./routes/main')(app);

//This connects our views folder
app.set('views',__dirname + '/views');

// use res.render to load up an ejs view file this is /routes



app.listen(8080);
console.log('8080 is the magic port');