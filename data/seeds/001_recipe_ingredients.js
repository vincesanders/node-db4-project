
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, quantity: 1, ingredient_id: 1},
    {recipe_id: 1, quantity: 1, ingredient_id: 2},
    {recipe_id: 1, quantity: 1, ingredient_id: 3},
    {recipe_id: 1, quantity: 2, ingredient_id: 4},
    {recipe_id: 1, quantity: 2, ingredient_id: 5},
    {recipe_id: 1, quantity: 2, ingredient_id: 6},
    {recipe_id: 1, quantity: 1, ingredient_id: 7},
    {recipe_id: 1, quantity: 0.2, ingredient_id: 8},
    {recipe_id: 1, quantity: 3, ingredient_id: 9},
    {recipe_id: 1, quantity: 2, ingredient_id: 10},
    {recipe_id: 1, quantity: 1, ingredient_id: 11},
    {recipe_id: 2, quantity: 12, ingredient_id: 12},
    {recipe_id: 2, quantity: 1.33, ingredient_id: 8},
    {recipe_id: 2, quantity: 4, ingredient_id: 4},
    {recipe_id: 2, quantity: 3, ingredient_id: 9},
    {recipe_id: 2, quantity: 1, ingredient_id: 8},
    {recipe_id: 2, quantity: 1, ingredient_id: 13},
    {recipe_id: 2, quantity: 2, ingredient_id: 14},
    {recipe_id: 2, quantity: 0.25, ingredient_id: 15},
    {recipe_id: 3, quantity: 2, ingredient_id: 16},
    {recipe_id: 3, quantity: 14.5, ingredient_id: 17},
    {recipe_id: 3, quantity: 12, ingredient_id: 18},
    {recipe_id: 3, quantity: 0.75, ingredient_id: 19},
    {recipe_id: 3, quantity: 0.33, ingredient_id: 20},
    {recipe_id: 3, quantity: 0.75, ingredient_id: 21}
  ]);
};
