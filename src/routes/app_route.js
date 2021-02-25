const express = require('express');
const router = express.Router();

const ControllerProxy = require('../controllers/ControllerProxy');


router.get('/',ControllerProxy.list);

module.exports = router;