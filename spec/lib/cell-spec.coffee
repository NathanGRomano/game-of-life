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

  describe 'has a right', ->

    When -> @res = @cell.right()
    Then -> expect(@res.x).toBe 5
    And -> expect(@res.y).toBe 4

  describe 'has a bottom right', ->

    When -> @res = @cell.bottomRight()
    Then -> expect(@res.x).toBe 5
    And -> expect(@res.y).toBe 5
