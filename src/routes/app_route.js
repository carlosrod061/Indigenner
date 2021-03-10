const express = require('express');
const router = express.Router();

const Inicio = require('../controllers/Inicio');


router.get('/',Inicio.list);

module.exports = router;