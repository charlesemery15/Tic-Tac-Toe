function Game(player_X, player_O) {
  this.players = [player_X, player_O]
  this.board = ["_","_","_",
                "_","_","_",
                "_","_","_"]
  this.currentPlayer = this.players[0]
}

Game.prototype.claimSquare = function(num) {
  var claim = (this.currentPlayer === this.players[0]) ? "X" : "O";
  console.log(claim)
    if (this.board[num] === "_") {
        this.board[num] = claim;
        this.switchPlayer();
    } else {
        throw new Error("Sorry this square has already been taken");
    }
};

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer === this.players[0]) {
    this.currentPlayer = this.players[1];
  } else {
    this.currentPlayer = this.players[0]
  }
};
