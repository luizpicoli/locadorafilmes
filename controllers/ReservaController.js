const knex = require('../database/dbconfig');

module.exports = {
  async index(req, res) {
    const reservas = await knex
      .select("nome", "ativo","f.nome as filmes")
      .from("reservas")
      .leftJoin("filmes as f", "reservas.id", "f.id")
      .orderBy("reservas.id", "desc");

    res.status(200).json(reservas);
  },

  async store(req, res) {
    const { nome, ativo, filmes_id } = req.body;

    if (!nome || !filmes_id) {
      res.status(400).json({ erro: "Dados inválidos" });
      return;
    }

    try {
      const novaReserva = await knex("reservas").insert({
        nome,
        ativo,
        filmes_id,
      });
      res.status(201).json({ id: novaReserva[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
};
