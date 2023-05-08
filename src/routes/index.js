const express = require('express');
const router = express.Router();
const crudRouter = require('./crud.router');

// colocar las rutas aquí
router.use('/users', crudRouter);

module.exports = router;