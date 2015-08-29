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

Grid.prototype.neigbors = function (x, y) {
  var x1 = this.width - 1;
  var y1 = this.height - 1;
  var count = 0;
  var cell = Cell(x, y);
  console.log(this.cells);
  console.log('cell', cell);
  if (this._aliveNeigbor(cell.top())) count++;
  if (this._aliveNeigbor(cell.topRight())) count++;
  if (this._aliveNeigbor(cell.right())) count++;
  if (this._aliveNeigbor(cell.bottomRight())) count++;
  if (this._aliveNeigbor(cell.bottom())) count++;
  if (this._aliveNeigbor(cell.bottomLeft())) count++;
  if (this._aliveNeigbor(cell.left())) count++;
  if (this._aliveNeigbor(cell.topLeft())) count++;
  return count;
};

Grid.prototype._aliveNeigbor = function (cell) {
  console.log('is cell %s, %s, within %s, %s, %s, %s: %s', cell.x,cell.y,0,0,this.width-1,this.height-1,cell.within(0,0,this.width-1,this.height-1));
  console.log('what is %s, %s it: %s', cell.x, cell.y, this.cell(cell.x, cell.y));
  return cell.within(0,0,this.width-1,this.height-1) && this.cell(cell.x,cell.y);
};

module.exports = Grid;
