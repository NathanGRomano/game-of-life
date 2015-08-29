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

Cell.prototype.bottomRight = function () {
  return this.bottom().right();
};

Cell.prototype.bottom = function () {
  return Cell(this.x, this.y + 1);
};

Cell.prototype.bottomLeft = function () {
  return Cell(this.x - 1, this.y + 1);
};

Cell.prototype.left = function () {
  return Cell(this.x - 1, this.y);
};

module.exports = Cell;
