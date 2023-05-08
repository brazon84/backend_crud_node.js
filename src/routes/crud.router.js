const { getAll, create, getOne, remove, update } = require('../controllers/crud.controllers');
const express = require('express');

const crudRouter = express.Router();

crudRouter.route("/")
		.get(getAll)
		.post(create)

crudRouter.route('/:id') 
		.get(getOne)
		.delete(remove)
		.put(update)

module.exports = crudRouter;