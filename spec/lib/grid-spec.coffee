describe 'a grid of cells', ->

  Given -> @Grid = requireSubject 'lib/grid', {}
  Given -> @grid = @Grid 10, 10

  describe 'can calculate the index of an x and y coordinate', ->

    When -> @res = @grid.index 2, 2
    Then -> expect(@res).toBe 22

  describe 'with an alive cell should return true after birth', ->

    When -> @grid.live 3,3
    Then -> expect(@grid.cell(3,3)).toBe true

  describe 'with a dead cell should return false after death', ->

    When -> @grid.die 3,3
    Then -> expect(@grid.cell(3,3)).toBe false

  describe 'with any cell the grid can get its active neighbors', ->

    Given -> @grid.live 4, 4
    Given -> @grid.live 3, 4
    Given -> @grid.live 4, 5
    When -> @res = @grid.neighbors 4, 4
    Then -> expect(@res).toBe 2

  describe 'with any live cell with with fewer than two neighbors after a generation will die', ->

    Given -> @grid.live 4,4
    Given -> @grid.live 4,3
    When -> @grid = @grid.generate()
    Then -> expect(@grid.cell(4,4)).toBe false
    And -> expect(@grid.cell(4,3)).toBe false

  describe 'with any live cell with with two or three live neighbors after a generation will live', ->

    Given -> @grid.live 4,4
    Given -> @grid.live 4,3
    Given -> @grid.live 5,4
    When -> @grid = @grid.generate()
    Then -> expect(@grid.cell(4,4)).toBe true

  describe 'with any live cell with with more than three live neighbors dies', ->

    Given -> @grid.live 3,4
    Given -> @grid.live 4,4
    Given -> @grid.live 4,3
    Given -> @grid.live 5,4
    Given -> @grid.live 4,5
    When -> @grid = @grid.generate()
    Then -> expect(@grid.cell(4,4)).toBe false

  describe 'with any dead cell with exactly three live neighbors becomes a live cell', ->

    Given -> @grid.live 4,3
    Given -> @grid.live 5,4
    Given -> @grid.live 4,5
    When -> @grid = @grid.generate()
    Then -> expect(@grid.cell(4,4)).toBe true

  describe 'can render itself', ->

    Given -> @grid = @Grid 2,2
    Given -> @grid.live 0,0
    Given -> @grid.live 1,1
    When -> @res = @grid.toString()
    Then -> expect(@res).toBe 'o.\n.o'
