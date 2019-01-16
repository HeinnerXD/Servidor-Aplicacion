var express = require('express');
var morgan = require('morgan');
var exphbs = require('express-handlebars');
var path = require('path');
var flash = require('connect-flash');
var session = require('express-session');
var MySQLStore = require('express-mysql-session');
var { database } = require('./keys');
var passport = require('passport');


//initializations

var app = express();
require('./lib/passport');

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');



//Middlewares
app.use(session( {
    secret: 'session',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(flash());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

//Global Variables

app.use((req,res,next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

//Routes

app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//Public

app.use(express.static(path.join(__dirname,'public')))

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'))
});