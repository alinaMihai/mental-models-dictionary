'use strict';

const extraResources = require('../data/extra-resources.json');

const express = require('express');
const router = express.Router();

function getExtraResources(req, res) {
    return res.status(200).json(extraResources);
}

router.get('/', getExtraResources);

module.exports = router;