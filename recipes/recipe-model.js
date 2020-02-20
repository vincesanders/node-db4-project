const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipe');
}

function getShoppingList(id) {
    return db('ingredient as i')
        .join('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
        .select('ri.quantity', 'i.name').where('ri.recipe_id', id);
}

function getInstructions(id) {
    return db('instruction').where('recipe_id', id);
}