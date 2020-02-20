
exports.up = function(knex) {
    return knex.schema.createTable('recipe', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
    }).createTable('ingredient', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
    }).createTable('recipe_ingredients', tbl => {
        tbl.primary(['recipe_id', 'ingredient_id']); //set foreign keys BOTH as primary keys
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.float('quantity').notNullable();
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredient').onDelete('RESTRICT').onUpdate('CASCADE');
    }).createTable('instruction', tbl => {
        tbl.increments().unsigned();
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.integer('step_number').notNullable();
        tbl.string('text').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instruction')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredient')
        .dropTableIfExists('recipe');
};
