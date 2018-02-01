function Game(player_1, player_2) {
  this.players = [player_1, player_2]
  this.board = ["_","_","_",
                "_","_","_",
                "_","_","_"]
}

Game.prototype.claimSquare = function(num) {
  var claim = "X";
    if (this.board[num] === "_") {
        this.board[num] = claim;
  } else {
        throw new Error("Sorry this square has already been taken");
  }
};
