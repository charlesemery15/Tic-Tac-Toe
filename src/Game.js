function Game(player_1, player_2) {
  this.players = [player_1, player_2]
  this.board = [null,null,null,
                null,null,null,
                null,null,null]
}

Game.prototype.claimSquare = function(num) {
  var claim = "X"
  this.board[num] = claim
};
