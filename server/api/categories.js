'use strict';

const categories = require('../data/categories.json');

const express = require('express');
const router = express.Router();

function getCategories(req, res) {
    return res.status(200).json(categories);
}

router.get('/', getCategories);

module.exports = router;