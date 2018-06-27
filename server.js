//Configuration for production
//Use node app.js for prod, Use gulp serve for live reload in dev

var express = require('express');
var path = require('path');

var app = express();

// Define the port to run on
app.set('port', 80);

app.use(express.static(path.join(__dirname, 'dist')));
// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Application started on port ' + port);
});