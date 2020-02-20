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

module.exports = router;