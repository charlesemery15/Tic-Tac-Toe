describe("Game", function() {

  beforeEach(function() {
    player_X = new Player("Joe");
    player_O = new Player("Cal");
    game = new Game(player_X, player_O);
  });

  describe("claimSquare", function(){

    it("allows a player to claim a square", function(){
      game.claimSquare(0);
      expect(game.board[0]).toEqual("X")
    });

    it("only allows un-claimed squares to be selected", function(){
      game.claimSquare(0);
      expect(function() { game.claimSquare(0)}).toThrow(new Error("Sorry this square has already been taken"))
    });

    it("will swap player after a square has been claimed", function(){
      game.claimSquare(0);
      expect(game.currentPlayer).toEqual(player_O)
    });
  });

  describe("switchPlayer", function(){

    it("alternates between each player", function(){
      game.switchPlayer();
      expect(game.currentPlayer).toEqual(player_O)
    });
  });
});
