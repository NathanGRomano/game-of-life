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

module.exports = Grid;
