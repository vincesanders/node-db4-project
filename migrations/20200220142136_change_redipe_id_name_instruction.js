
exports.up = function(knex) {
    return knex.schema.table('instruction', table => {
        table.renameColumn('redipe_id', 'recipe_id');
    });
};

exports.down = function(knex) {
    return knex.schema.table('instruction', table => {
        table.renameColumn('recipe_id', 'redipe_id');
    });
};
