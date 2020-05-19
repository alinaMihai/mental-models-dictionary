'use strict';

const mentalModels = require('../data/dictionary.json');

const express = require('express');
const router = express.Router();

function getMentalModels(req, res) {
    return res.status(200).json(mentalModels);
}

function getMentalModelsByCategory(req, res) {
    const categoryId = req.params.id;
    const byCategory = mentalModels.filter(item => item.Category == categoryId);
    return res.status(200).json(byCategory);
}

router.get('/', getMentalModels);
router.get('/:id', getMentalModelsByCategory);

module.exports = router;