const catchError = require("../utils/catchError");
const Crud = require("../models/Crud");

const getAll = catchError(async (req, res) => {
  const cruds = await Crud.findAll();
  return res.json(cruds);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const cruds = await Crud.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(cruds);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const cruds = await Crud.findByPk(id);
  return res.json(cruds);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Crud.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const cruds = await Crud.update(
    { first_name, last_name, email, password, birthday },
    { where: { id }, returning: true }
  );
  return res.json(cruds[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
