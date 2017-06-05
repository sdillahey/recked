var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();

var app = express();

require('./config/database');
require('./config/passport');

var userRoutes = require('./routes/index');

app.use(logger('dev'));
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// app.use(cookieParser());
app.use(session({
   secret: 'ReckedLife',
   resave: false,
   saveUninitialized: true
 }));
app.use(passport.initialize());
app.use(passport.session());

// User & API Routes
app.use('/', userRoutes);
// app.use('/api', apiRoutes);

//Client-side Route Catchall ???? need to send {user: req.user}
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Set for Development Purposes to avoid React on 3000
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

