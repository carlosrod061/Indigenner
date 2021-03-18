const express = require('express');
const router = express.Router();


const Inicio = require('../controllers/Inicio');
const Foros = require('../controllers/Foros');
const Juegos = require ('../controllers/Juegos');
const Novedades = require ('../controllers/Novedades');
const Iniciar = require ('../controllers/Iniciar');
const Registrarse = require('../controllers/Registrarse');
const Desarrollador = require('../controllers/Desarrollador');

router.get('/',Inicio.list);

router.get('/foros',Foros.list);

router.get('/juegos',Juegos.list)

router.get('/novedades',Novedades.list)

router.get('/iniciarsesion',Iniciar.list);

router.post('/login',Iniciar.login);

router.get('/cerrarsesion', Iniciar.cerrarsesion);

router.get('/registrarse',Registrarse.list);

router.get('/registrarse',Desarrollador.list);

router.post('/new-user',Registrarse.newUser);

module.exports = router;