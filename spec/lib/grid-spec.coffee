describe 'a grid of cells', ->

  Given -> @Grid = requireSubject 'lib/grid', {}
  Given -> @grid = @Grid 10, 10

  describe 'can calculate the index of an x and y coordinate', ->

    When -> @res = @grid.index 2, 2
    Then -> expect(@res).toBe 22
