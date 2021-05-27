const express = require("express");
const routes = express.Router();

const DestaqueController = require("./controllers/DestaqueController");
const EstatisticaController = require("./controllers/EstatisticaController");
const FilmeController = require("./controllers/FilmeController");
const PropostasController = require("./controllers/PropostasController");
const UsuarioController = require("./controllers/UsuarioController");
const login = require("./middleware/login")

routes.get("/filmes",FilmeController.index)
      .post("/filmes", login,FilmeController.store)
      .delete("/filmes/:id", FilmeController.destroy);

routes.get("/filmesbyname", FilmeController.findByName);

routes.get("/propostas", PropostasController.index)
      .post("/propostas", PropostasController.store);

routes.get("/estatistica", EstatisticaController.index);

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

routes.get("/destaques", DestaqueController.index);




module.exports = routes;
