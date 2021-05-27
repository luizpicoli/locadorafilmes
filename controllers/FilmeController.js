const knex = require("../database/dbconfig");

module.exports = {
  
  async index(req, res) {   

    const filmes = await knex
      .select("f.id", "f.nomefilme", "g.nome as genero", "f.ano", "f.preco", "f.foto","f.destaque")
      .from("filmes as f")
      .leftJoin("generos as g", "f.genero_id", "g.id")
      .orderBy("f.id", "desc");

    res.status(200).json(filmes);
  },

  async store(req, res) {
    // faz a desestruturação do objeto req.body
    const { nomefilme, genero_id, ano, preco, foto, destaque } = req.body;

    // validação para os campos
    if (!nomefilme || !genero_id || !ano || !preco || !foto ) {
      res.status(400).json({ erro: "Enviar nome filme, genero_id, ano, preco e foto do filme" });
      return;
    }
    const novo = await knex("filmes").insert({ nomefilme, genero_id, ano, preco, foto,destaque });
    console.log(novo)
    try {
     
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
  async findByName (req , res){
    const {nomefilme} = req.query;
    let resultado = await knex("filmes").where((qb)=>{

      qb.where("filmes.nomefilme","like",`%${nomefilme}%`)


    })
  
    res.status(200).json({ usuarios: resultado });
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const deleteHandler = await knex("filmes").where("id", id).del();

      if (!deleteHandler) {
        throw new Error(`Não existe filme com id ${id}`);
      }
      res.send(`Filme deletado com sucesso!`);
    } catch (e) {
      res.status(400).json({ ok: 0, msg: `Erro ao deletar: ${e.message}` });
    }
  },
};
