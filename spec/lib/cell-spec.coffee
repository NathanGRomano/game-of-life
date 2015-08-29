describe 'a cell', ->

  Given -> @Cell = requireSubject 'lib/cell', {}

  Given -> @cell = @Cell 4, 4

  describe 'has a top', ->

    When -> @res = @cell.top()
    Then -> expect(@res.x).toBe 4
    And -> expect(@res.y).toBe 3

  describe 'has a top right', ->

    When -> @res = @cell.topRight()
    Then -> expect(@res.x).toBe 5
    And -> expect(@res.y).toBe 3


