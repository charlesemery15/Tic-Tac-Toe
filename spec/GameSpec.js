describe("Game", function() {

  beforeEach(function() {
    player_1 = new Player("Joe");
    player_2 = new Player("Cal");
    game = new Game(player_1, player_2);
  });

  describe("claimSquare", function(){

    it("allows a player to claim a square", function(){
      game.claimSquare(0);
      expect(game.board[0]).toEqual("X")
    });
  });
});

//
// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
