[![Build Status](https://travis-ci.org/NathanGRomano/game-of-life.svg?branch=master)](https://travis-ci.org/NathanGRomano/game-of-life)

A game of life implementation with NodeJS using a TDD approach!

This library exposes a single `Grid` API.  The API allows one to 
build a Game of Life simulation.  


# Installation and Environment Setup

Install node.js (See download and install instructions here: http://nodejs.org/).

Clone this repository

    > git clone git@github.com:NathanGRomano/game-of-life.git

cd into the directory and install the dependencies

    > cd game-of-life
    > npm install && npm shrinkwrap --dev

# Running Tests

Install coffee-script

    > npm install coffee-script -g

Tests are run using grunt.  You must first globally install the grunt-cli with npm.

    > sudo npm install -g grunt-cli

## Unit Tests

To run the tests, just run grunt

    > grunt spec

## Running the Example

Running the example is easy.

    > node example.js

You will see this output:

```
Conway's Game of Life

Inital State:
......o.
ooo...o.
......o.
........
...oo...
...oo...

First Generation:
.o......
.o...ooo
.o......
........
...oo...
...oo...
```

## API

The Grid

###Grid

Create a grid with a `width` of `10` and a `height` of `10`.

### #(width:Number, height:Number)

```javascript
var grid = Grid(10,10);
```

### #live(x:Number, y:Number)

This will make a cell alive.

```javascript
grid.live(4, 4)
```

### #die(x:Number, y:Number)

This will make a cell dead.

```javascript
grid.die(4, 4)
```

### #generate()

This will calculate the next generation of the grid and return it.

```javascript
var nextGenerationGrid = grid.generate();
```

## TODO

###UI
Make a pretty UI maybe

###Performance

Make it faster, there are some techniques to improve the performance.  One
can easily disqualify a neighbor if the `x` or `y` is out of bounds.  This
way we don't have to check eight cells.
