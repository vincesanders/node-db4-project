
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'cup(s) of butter'},
        {name: 'cup(s) of sugar'},
        {name: 'cup(s) of brown sugar'},
        {name: 'egg(s)'},
        {name: 'teaspoon(s) of vanilla'},
        {name: 'teaspoon(s) of baking soda'},
        {name: 'cup(s) of water'},
        {name: 'teaspoon(s) of salt'},
        {name: 'cup(s) of flour'},
        {name: 'cup(s) of chocolate chips'},
        {name: 'cup(s) of chopped walnuts'},
        {name: 'ounce(s) of sliced bacon'},
        {name: 'head(s) of cabbage'},
        {name: 'tablespoon(s) of ginger'},
        {name: 'cup(s) of okonomiyaki sauce'},
        {name: 'pound(s) of ground beef'},
        {name: 'ounce(s) of tomato soup'},
        {name: 'taco shell(s)'},
        {name: 'cup(s) of shredded lettuce'},
        {name: 'cup(s) of shredded cheese'},
        {name: 'cup(s) of diced tomato'}
      ]);
    });
};
