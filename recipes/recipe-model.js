const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeByIngredient
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
    return db('instruction').where('recipe_id', id).orderBy('step_number');
}

function getRecipeByIngredient(id) {
    return db('recipe_ingredients as ri')
        .join('recipe as r', 'ri.recipe_id', 'r.id')
        .select('r.id', 'r.name').where('ri.ingredient_id', id);
}