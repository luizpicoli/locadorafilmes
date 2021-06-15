const knex = require("../database/dbconfig");
module.exports = {

  async index(req, res) {

    const generos = await knex("generos").orderBy("nome");

    res.status(200).json(generos);

  }

};
