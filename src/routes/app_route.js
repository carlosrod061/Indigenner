const express = require('express');
const router = express.Router();

const Inicio = require('../controllers/Inicio');
const Novedades = require('../controllers/Novedades')

router.get('/',Inicio.list);

router.get('/novedades',Novedades.list);

module.exports = router;