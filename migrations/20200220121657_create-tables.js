
exports.up = function(knex) {
    knex.schema.createTable('recipe', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
    }).createTable('ingredient', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
    }).createTable('recipe_ingredients', tbl => {
        tbl.integer('redipe_id').unsigned().notNullable().references('id').inTable('recipe');
        tbl.float('quantity').notNullable();
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredient');
    }).createTable('instruction', tbl => {
        tbl.increments().unsigned();
        tbl.integer('redipe_id').unsigned().notNullable().references('id').inTable('recipe');
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
