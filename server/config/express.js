'use strict';
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
var errorHandler = require('errorhandler');
const config = require('./environment');

module.exports = function(app) {
    app.set('appPath', path.join(config.root, 'build'));
    app.use(favicon(path.join(config.root, 'public/favicon.ico')));

    if (config.host === 'localhost') {
        app.use(express.static(path.join(config.root, 'build')));
    }
    app.use(errorHandler()); // Error handler - has to be last
}