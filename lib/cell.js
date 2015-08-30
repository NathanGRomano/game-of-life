/**
 * A Cell is a convience method that represents a part of a Grid.  The
 * sole purpose of this class is to easily help get new coordinates
 * in determining the neighbors of a given cell.  The methods are pure
 * functions and are intended to be immutable.
 *
 * @api private
 * @param x Number
 * @param y Number
 */

function Cell (x, y) {
  if (!(this instanceof Cell)) return new Cell(x, y);
  this.x = x;
  this.y = y;
}

/**
 * Grab the Cell above this one
 *
 * @api private
 * @return Cell
 */

Cell.prototype.top = function () {
  return Cell(this.x, this.y - 1);
};

/**
 * Grab the Cell to the top right
 *
 * @api private
 * @return Cell
 */

Cell.prototype.topRight = function () {
  return this.top().right();
};

/**
 * Grab the Cell to the right of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.right = function () {
  return Cell(this.x + 1, this.y);
};

/**
 * Grab the Cell to the bottom right of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.bottomRight = function () {
  return this.bottom().right();
};

/**
 * Grab the Cell to the bottom of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.bottom = function () {
  return Cell(this.x, this.y + 1);
};

/**
 * Grab the Cell to the bottom left of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.bottomLeft = function () {
  return this.bottom().left();
};

/**
 * Grab the Cell to the left of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.left = function () {
  return Cell(this.x - 1, this.y);
};

/**
 * Grab the Cell to the top left of this cell
 *
 * @api private
 * @return Cell
 */

Cell.prototype.topLeft = function () {
  return this.top().left();
};

/**
 * Check if this cells is within some bounding box
 *
 * @param x0 Number
 * @param x1 Number
 * @param y0 Number
 * @param y1 Number
 * @return Boolean
 */

Cell.prototype.within = function (x0, y0, x1, y1) {
  if (this.x < x0 || this.x > x1) return false;
  if (this.y < y0 || this.y > y1) return false;
  return true;
};

module.exports = Cell;
