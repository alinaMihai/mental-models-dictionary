'use strict';

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Methods',
            'PUT,GET,POST,DELETE,OPTIONS'
        );
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, enctype , Accept',
        );
        next();
    });

    // API endpoints
    app.use('/api/categories', require('./api/categories'));
    app.use('/api/models', require('./api/models'));
    app.use('/api/resources', require('./api/resources'));
}