
var express = require('express');
var cors = require('cors');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var directoryName = __dirname;

var config = require('./server/config/config')[env];
config.rootPath = directoryName;

require('./server/config/mongoose')(config);
app.set('superSecret', config.secret);
require('./server/config/express')(app, config);

app.use(cors());

require('./server/config/route')(app, directoryName);



app.listen(config.port, function () {
    console.log('Example listening on port ' + config.port);
});

module.exports = app

