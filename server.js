/**
 * Created by buwan on 5/22/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// import routes
var routes = require('./api/api_routes');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    'extended': true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// start app listening
app.listen(7890);

// register APIs
app.use('/api', routes);

console.log("App listening on port : 7890");