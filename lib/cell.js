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
  return this.bottom().left();
};

Cell.prototype.left = function () {
  return Cell(this.x - 1, this.y);
};

Cell.prototype.topLeft = function () {
  return this.top().left();
};

Cell.prototype.within = function (x0, y0, x1, y1) {
  if (this.x < x0 || this.x > x1) return false;
  if (this.y < y0 || this.y > y1) return false;
  return true;
};

module.exports = Cell;
