describe("Player", function() {

  it("should have a name", function() {
    player = new Player("charles");
    expect(player.name).toEqual("charles");
  });
});
