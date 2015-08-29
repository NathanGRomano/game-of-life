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
    When -> @res = @grid.neigbors 4, 4
    Then -> expect(@res).toBe 2
