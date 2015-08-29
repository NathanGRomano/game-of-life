var Cell = require('./cell');

function Grid (width,height) {
  if (!(this instanceof Grid)) return new Grid(width,height);

  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}

Grid.prototype.index = function (x, y) {
  return (y * this.width) + x;
};

Grid.prototype.cell = function (x, y) {
  return this.cells[this.index(x,y)] ? true : false;
};

Grid.prototype.live = function (x, y) {
  this.cells[this.index(x,y)] = true;
};

Grid.prototype.die = function (x, y) {
  this.cells[this.index(x,y)] = false;
};

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

Grid.prototype._aliveneighbor = function (cell) {
  return cell.within(0,0,this.width-1,this.height-1) && this.cell(cell.x,cell.y);
};

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

module.exports = Grid;
