const express = require('express');
const config = require('./config/environment');
var bodyParser = require('body-parser');
const app = express();
require('./routes')(app);
require('./config/express')(app);
const server = require('http').createServer(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

server.listen(config.port, config.ip, function() {
    console.log(
        'Express server listening on %d, in %s mode',
        config.port,
        app.get('env')
    )
});
exports = module.exports = app;