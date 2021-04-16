const express = require('express');
const router = express.Router();


const Inicio = require('../controllers/Inicio');
const Foro = require('../controllers/Foro');
const Foros = require('../controllers/Foros');
const Juegos = require ('../controllers/Juegos');
const Novedades = require ('../controllers/Novedades');
const Iniciar = require ('../controllers/Iniciar');
const Registrarse = require('../controllers/Registrarse');

const Desarrollador = require('../controllers/Desarrollador');
const Perfil = require('../controllers/Perfil');
const ModificarPerfil = require('../controllers/ModificarPerfil');
const ModificarProyecto = require('../controllers/ModificarProyecto');
const newProyecto = require('../controllers/newProyecto');
const Reestablecer = require('../controllers/ResetPassword');

router.get('/',Inicio.list);

router.get('/foros',Foros.list);

router.get('/foro/:name',Foro.list);

router.get('/juegos',Juegos.list)

router.get('/perfil',Perfil.list)

router.get('/modificarperfil',ModificarPerfil.list)

router.get('/newproyecto',newProyecto.list)

router.post('/crearproyecto',newProyecto.crearproyecto)

router.get('/novedades',Novedades.list)

router.get('/iniciarsesion',Iniciar.list);

router.post('/login',Iniciar.login);

router.get('/cerrarsesion', Iniciar.cerrarsesion);

router.get('/registrarse',Registrarse.list);

router.get('/desarrollador',Desarrollador.list);

router.post('/new-user',Registrarse.newUser);

router.post('/abrirForo',Foros.abrirForo);

router.post('/abrirProyecto',ModificarProyecto.abrirProyecto);

router.post('/actualizarproyecto',ModificarProyecto.actualizarproyecto);

router.post('/comentar',Foros.comentar);

router.post('/actualizar',Perfil.actualizar);

router.get('/sendEmail',Reestablecer.sendEmail);

router.post('/resetPassword',Reestablecer.resetPassword);

router.get('/settingPassword/:user',Reestablecer.settingPassword);

router.post('/settingPassword/',Reestablecer.settingPasswordPost);

module.exports = router;