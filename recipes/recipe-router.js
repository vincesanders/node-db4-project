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

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    recipe.getInstructions(id)
    .then(instructions => {
        if (instructions.length) {
            res.json(instructions);
        } else {
            res.status(404).json({ message: 'Could not find the instructions for the given recipe.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the instructions.' });
    });
});

router.get('/ingredient/:id', (req, res) => {
    const { id } = req.params;

    recipe.getRecipeByIngredient(id)
    .then(recipes => {
        if (recipes.length) {
            res.json(recipes);
        } else {
            res.status(404).json({ message: 'Could not find any recipes for the given ingredient.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get any recipes.' });
    });
});

module.exports = router;