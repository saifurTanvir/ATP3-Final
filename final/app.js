//declaration
var express = require('express');
//var employee = require('./controllers/employee');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
//var logout = require('./controllers/logout');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use('/abc', express.static('xyz'));

app.use('/register', admin);
app.use('/register', customer);



//routes
app.get('/', function(req, res){
	res.send("Welcome");
});



//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});