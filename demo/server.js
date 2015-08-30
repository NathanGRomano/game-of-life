var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Grid = require('../lib').Grid;
var screen = {
  generations: 0,
  grid: function () {
    if (!this._grid) this._grid = Grid(100,100);
    return this._grid;
  },
  live: function (x,y) { 
    this.grid().live(x,y);
    return this;
  },
  die: function (x,y) {
    this.grid().die(x,y);
    return this;
  },
  tick: function () {
    this.generations++;
    this._grid = this.grid().generate();
    return this;
  }
};
var grid = Grid(100,100);
setInterval(function () {
  io.emit('cells', screen.tick().grid().cells);
}, 1000);
io.on('connection', function (sock) {
  sock.emit('generations', screen.generations);
  sock.on('live', function (x, y) {
    console.log('live %s,%s',x,y);
    screen.live(x, y);
  });
  sock.on('die', function (x, y) {
    console.log('die %s,%s',x,y);
    screen.die(x, y);
  });
});
server.listen(port);
