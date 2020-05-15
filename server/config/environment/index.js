'use strict';

const path = require('path');


module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 8080,
    ip: process.env.IP || '0.0.0.0',
    root: path.normalize(__dirname + '/../../../')
}