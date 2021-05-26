const express = require("express");
const routes = express.Router();

const DestaqueController = require("./controllers/DestaqueController");
const EstatisticaController = require("./controllers/EstatisticaController");
const FilmeController = require("./controllers/FilmeController");
const UsuarioController = require("./controllers/UsuarioController");
const ReservaController = require("./controllers/ReservaController");
const login = require("./middleware/login")

routes.get("/filmes",FilmeController.index)
      .post("/filmes", login,FilmeController.store)
      .delete("/filmes/:id", FilmeController.destroy);

routes.get("/filmesbyname", FilmeController.findByName);

routes.get("/estatistica", EstatisticaController.index)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

routes.get("/destaques", DestaqueController.index);

routes.get("/reserva", ReservaController.index)
routes.post("/reserva", ReservaController.store)


module.exports = routes;
