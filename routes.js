const express = require("express");
const DestaqueController = require("./controllers/DestaqueController");
const routes = express.Router()

const FilmeController = require("./controllers/FilmeController");
const UsuarioController = require("./controllers/UsuarioController");
const login = require("./middleware/login")

routes.get("/filmes",  FilmeController.index)
      .post("/filmes", login, FilmeController.store);

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);
      
routes.get("/destaques", DestaqueController.index)

module.exports = routes;