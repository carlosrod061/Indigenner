const express = require('express');
const app = express();
//Modulo para recargar el proyecto automaticamente.
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
// express-toastr
const toastr = require('express-toastr');


//Modulo para sesiones
var session = require("express-session");

//Importing routes
const appRoutes = require('./routes/app_route');



//Settings

//Configuracion del puerto.
app.set('port',process.env.PORT || 3000);
//Configuracion del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//CONEXION A MYSQL
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: "1234fdgbvgvfdxd",
    resave: false,
    saveUninitialized:false
}));



//Routes
app.use('/', appRoutes);

// Static Files
app.use(express.static(path.join(__dirname,'/public')));


//Inicio del server
app.listen(app.get('port'),() => {
    console.log('server on port',app.get('port'));
});