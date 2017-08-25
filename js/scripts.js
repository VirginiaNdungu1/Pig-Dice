// Business Logic
// create player constructor
function Players(username, diceScores, totalScores, overallScores) {
  this.username = username;
  this.diceScores = 0;
  this.totalScores = 0;
  this.overallScores = 0;
}
// Create Random Generator
function resetFields() {
  var player1 = $("input#player1-userName").val("");
  var player2 = $("input#player2-userName").val("");
}
Players.prototype.roll = function() {
  var diceRoll = Math.floor((Math.random() * 6) + 1);

  if (diceRoll === 1) {
    this.totalScores = 0;
    alert("Ooops!!! You got a 1. Your turn is over!!!!!")
  } else {
    this.totalScores += diceRoll;
  }
  return diceRoll;
  //console.log(randomNumber);
};

Players.prototype.hold = function() {
  this.overallScores += this.totalScores;
  this.totalScores = 0;
  return this.overallScores;

};

//user interface

$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#player1-userName").val();
    var player2 = $("input#player2-userName").val();
    var gamer1 = new Players(player1);
    var gamer2 = new Players(player2);
    $(".player1Name").text(gamer1.username);
    $(".player2Name").text(gamer2.username);

    $("#player1Roll").click(function(event) {
      event.preventDefault();
      //console.log(gamer1.roll());
      $(".Player1-diceScores").text(gamer1.roll());
      $(".Player1-totalScores").text(gamer1.totalScores);
    });
    $("#player2Roll").click(function(event) {
      event.preventDefault();
      //console.log(gamer2.roll());
      $(".Player2-diceScores").text(gamer2.roll());
      $(".Player2-totalScores").text(gamer2.totalScores);
    });
    $("#player1Hold").click(function() {
      $(".Player1-overallScores").text(gamer1.hold());
    });
    $("#player1Hold").click(function() {
      $(".Player2-overallScores").text(gamer2.hold());
    });
    var player1 = $("input#player1-userName").val("");
    var player2 = $("input#player2-userName").val("");
  });
  resetFields();
});
