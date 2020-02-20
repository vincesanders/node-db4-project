const express = require('express');

const recipe = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    recipe.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;

    recipe.getShoppingList(id)
    .then(shoppingList => {
        if (shoppingList.length) {
            res.json(shoppingList);
        } else {
            res.status(404).json({ message: 'Could not find the shopping list for the given recipe.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the shopping list.' });
    });
});

module.exports = router;