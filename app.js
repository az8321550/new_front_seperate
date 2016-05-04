var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var ms=require("ms");
var compression = require('compression')
var config=require("./config/config");


var app = express();
var dir=app.get('env')=="production"?"dist":"app";

app.set("views", __dirname + "/"+dir+"/views");
app.set('view engine', 'swig');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname + "/"+dir),{
    maxAge:ms("7d")
}));

routes(app);

app.set('port', config.port.www);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
