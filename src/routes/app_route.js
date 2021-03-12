const express = require('express');
const router = express.Router();

const Inicio = require('../controllers/Inicio');
const Foros = require('../controllers/Foros');
const Juegos = require ('../controllers/Juegos');

router.get('/',Inicio.list);

router.get('/foros',Foros.list);

router.get('/juegos',Juegos.list)

module.exports = router;