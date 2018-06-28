//Configuration for QA

var express = require('express');
var path = require('path');

var app = express();

// Define the port to run on
app.set('port', 80);
app.use(express.static(path.join(__dirname, 'dist','static')));
console.log("App is serving files from "+path.join(__dirname, 'dist','static'));
// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Application started on port ' + port);
});