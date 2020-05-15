'use strict';
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const config = require('./environment');

module.exports = function(app) {
    app.set('appPath', path.join(config.root, 'dist'));
    app.use(favicon(path.join(config.root, 'public/favicon.ico')));

    if (config.host === 'localhost') {
        app.use(express.static(path.join(config.root, 'dist')));
    }
}