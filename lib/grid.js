var Cell = require('./cell');

/**
 * Instantiate a Grid given the width and height
 * 
 * TODO handle negative and other invalid data
 *
 * @api public
 * @param width Number
 * @param height Number
 */

function Grid (width,height) {
  if (!(this instanceof Grid)) return new Grid(width,height);

  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}

/**
 * Calculate the index given the coordinates
 *
 * @param x Number
 * @param y Number
 * @return Number
 */

Grid.prototype.index = function (x, y) {
  return (y * this.width) + x;
};

/**
 * Grab the cell's state given the coordinates
 *
 * @param x Number
 * @param y Number
 * @return Boolean
 */

Grid.prototype.cell = function (x, y) {
  return this.cells[this.index(x,y)] ? true : false;
};

/**
 * Set the cell to an alive state given the coordinates
 *
 * @api public
 * @param x Number
 * @param y Number
 */

Grid.prototype.live = function (x, y) {
  this.cells[this.index(x,y)] = true;
};

/**
 * Set the cell to a dead state given the coordinate
 *
 * @api public
 * @param x Number
 * @param y Number
 */

Grid.prototype.die = function (x, y) {
  this.cells[this.index(x,y)] = false;
};

/**
 * Calculate the number of neighbors given the coordinate
 *
 * @api public
 * @param x Number
 * @param y Number
 * @return Number
 */

Grid.prototype.neighbors = function (x, y) {
  var x1 = this.width - 1;
  var y1 = this.height - 1;
  var count = 0;
  var cell = Cell(x, y);
  if (this._aliveneighbor(cell.top())) count++;
  if (this._aliveneighbor(cell.topRight())) count++;
  if (this._aliveneighbor(cell.right())) count++;
  if (this._aliveneighbor(cell.bottomRight())) count++;
  if (this._aliveneighbor(cell.bottom())) count++;
  if (this._aliveneighbor(cell.bottomLeft())) count++;
  if (this._aliveneighbor(cell.left())) count++;
  if (this._aliveneighbor(cell.topLeft())) count++;
  return count;
};

/**
 * Check if this neighbor is alive
 *
 * @param cell Cell
 * @return Boolean
 */

Grid.prototype._aliveneighbor = function (cell) {
  return cell.within(0,0,this.width-1,this.height-1) && this.cell(cell.x,cell.y);
};

/**
 * Generates a new grid from the current grid applying the three rules of
 * Conway's Game of Life
 *
 * @return Grid
 */

Grid.prototype.generate = function () {
  var x, y, neighbor
  var grid = Grid(this.width, this.height);
  for (x=0; x<this.width; x++) {
    for (y=0; y<this.height; y++) {
      neighbors = this.neighbors(x, y);
      if (this.cell(x,y)) {
        if (neighbors < 2) {
          grid.die(x, y);
        }
        else if (neighbors === 2 || neighbors === 3) {
          grid.live(x, y); 
        }
        else if (neighbors > 3) {
          grid.die(x, y);
        }
      }
      else {
        if (neighbors === 3) {
          grid.live(x, y);
        }
      }
    }
  } 
  return grid;
};

Grid.prototype.toString = function () {
  var lines = [];
  var line;
  for (var y=0; y<this.height; y++) {
    line = '';
    for (var x=0; x<this.width; x++) {
      line += this.cell(x,y) ? 'o' : '.'
    }
    lines.push(line);
  }
  return lines.join('\n');
};


module.exports = Grid;
