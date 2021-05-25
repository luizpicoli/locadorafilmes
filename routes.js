const express = require("express");
const routes = express.Router();

const DestaqueController = require("./src/controllers/DestaqueController");
const FilmeController = require("./src/controllers/FilmeController");
const UsuarioController = require("./src/controllers/UsuarioController");
const login = require("./src/middleware/login")

routes.get("/filmes",  FilmeController.index)
      .post("/filmes", login, FilmeController.store);

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);
      
routes.get("/destaques", DestaqueController.index)

module.exports = routes;
