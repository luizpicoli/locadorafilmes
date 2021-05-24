const knex = require("../database/dbConfig");

module.exports = {
  // index: listagem
  // store/create: inclusão
  // update: alteração
  // show: retornar 1 registro
  // destroy: exclusão

  async index(req, res) {
    //const carros = await knex("carros").orderBy("id", "desc");
    
    // const carros = await knex("carros")
    //    .join("marcas", "carros.marca_id", "=", "marcas.id")
    //    .orderBy("carros.id", "desc");

    const destaques = await knex
      .select("f.id", "f.nomefilme", "g.nome as genero", "f.ano", "f.preco", "f.foto")
      .from("filmes as f")
      .leftJoin("generos as g", "f.genero_id", "g.id")
      .where("destaque",true)
      .orderBy("f.id", "desc");

    res.status(200).json(destaques);
  },

  
  
};
