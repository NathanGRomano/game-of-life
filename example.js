var Grid = require('./lib').Grid;

var grid = Grid(8,6);
grid.live(6,0);
grid.live(6,1);
grid.live(6,2);

grid.live(0,1);
grid.live(1,1);
grid.live(2,1);

grid.live(3,4);
grid.live(4,4);
grid.live(3,5);
grid.live(4,5);

var initialState = grid.toString();
var firstGeneration = grid.generate().toString();

console.log('Conway\'s Game of Life\n\nInital State:\n%s\n\nFirst Generation:\n%s\n',initialState,firstGeneration);
