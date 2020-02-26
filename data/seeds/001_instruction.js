
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction').insert([
    {recipe_id: 1, step_number: 1, text: 'Preheat oven to 350 degrees F (175 degrees C).'},
    {recipe_id: 1, step_number: 2, text: 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
    {recipe_id: 1, step_number: 3, text: 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'},
    {recipe_id: 2, step_number: 1, text: 'Fry the bacon in a large skillet over medium heat until slightly crispy. Remove to paper towels to drain and set aside.'},
    {recipe_id: 2, step_number: 2, text: 'In a large bowl, stir together the water and eggs. Gradually stir in the flour and salt until smooth. Add the cabbage and ginger; stir until evenly distributed.'},
    {recipe_id: 2, step_number: 3, text: 'Heat a skillet over medium heat and coat with cooking spray. Pour about 1/4 of the batter into the center of the skillet. Place 4 slices of cooked bacon in the center. Use a spatula to shape the pancake into a circle. Fry for about 5 minutes or until the edges are dry. Flip and cook on the other side until the center is stable and it is browned on both sides. Remove from the pan and drizzle with tonkatsu sauce to serve. Continue with remaining batter and bacon.'},
    {recipe_id: 3, step_number: 1, text: 'Cook the beef in a 12-inch skillet over medium-high heat until the beef is well browned, stirring often to separate meat. Pour off any fat. Season with salt and black pepper.'},
    {recipe_id: 3, step_number: 2, text: 'Stir the soup in the skillet and heat to a boil. Reduce the heat to low. Cook for 5 minutes or until the soup is reduced, stirring often.'},
    {recipe_id: 3, step_number: 3, text: 'Divide the beef mixture among the taco shells. Top with the lettuce, tomato and cheese.'}
  ]);
};
