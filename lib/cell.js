function Cell (x, y) {
  if (!(this instanceof Cell)) return new Cell(x, y);
  this.x = x;
  this.y = y;
}

Cell.prototype.top = function () {
  return Cell(this.x, this.y - 1);
};

Cell.prototype.topRight = function () {
  return this.top().right();
};

Cell.prototype.right = function () {
  return Cell(this.x + 1, this.y);
};

module.exports = Cell;
