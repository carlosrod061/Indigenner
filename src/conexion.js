
const express = require('express');
const app = express();
//Modulo para recargar el proyecto automaticamente.
const morgan = require('morgan');
const path = require('path');
//Conexion a base de datos
const admin = require('firebase-admin');
var serviceAccount = require("../indiginner-firebase-adminsdk-x3u93-5eb5b6298f.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://indiginner-default-rtdb.firebaseio.com/'
});



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
    cookie:{maxAge:60000},
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