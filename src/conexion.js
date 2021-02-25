const express = require('express');
const app = express();
//Modulo para recargar el proyecto automaticamente.
const morgan = require('morgan');
const path = require('path');
//Modulos requeridos para mysql
const myConnection = require('express-myconnection');
const mysql = require('mysql');

//Modulo para sesiones
var session = require("express-session");

//Importing routes
const appRoutes = require('./routes/app_route');
const { urlencoded } = require('express');


//Settings

//Configuracion del puerto.
app.set('port',process.env.PORT || 3000);
//Configuracion del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//CONEXION A MYSQL
//Middlewares
app.use(morgan('dev'));

app.use(session({
    secret: "1234fdgbvgvfdxd",
    resave: false,
    saveUninitialized:false
}));
/*
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'libreria'
}, 'single'));
app.use(express.urlencoded({extended:false}));
*/
//Routes
app.use('/', appRoutes);

// Static Files
app.use(express.static(path.join(__dirname,'/public')));


//Inicio del server
app.listen(app.get('port'),() => {
    console.log('server on port',app.get('port'));
});