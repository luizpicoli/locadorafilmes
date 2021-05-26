exports.up = (knex) => {
    return knex.schema.createTable("reservas", (table) => {
      table.increments();
      table.string("nome", 45).notNullable();
      table.boolean('ativo').notNullable().defaultTo(true);

      table.integer("filmes_id").notNullable().unsigned();
      table.foreign("filmes_id").references("filmes.id").onUpdate("cascade");
  
      table.timestamps(true, true);
    });
  };
  
  exports.down = (knex) => knex.schema.dropTable("reservas");
  