// import required libraries
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var server = require('http').createServer(app);
var sentiment = require('sentiment');
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Server listening at port %d', port);
});

// routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {

});
