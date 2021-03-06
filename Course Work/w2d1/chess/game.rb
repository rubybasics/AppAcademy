require_relative 'display'
require_relative 'cursorable'
require_relative 'board'
require_relative 'pieces/piece'
require_relative 'player'

class Game
  def initialize
    @board = Board.new
    @player = Player.new(@board)
  end

  def run
    puts "Mark all the spaces on the board!"
    puts "WASD or arrow keys to move the cursor, enter or space to confirm."
    while true
      pos = @player.move
      @board.mark(pos)
    end
    puts "Hooray, the board is filled!"
  end
end

if __FILE__ == $PROGRAM_NAME
  Game.new.run
end
