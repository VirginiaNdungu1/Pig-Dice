// Business Logic
// create player constructor
function Players(username, diceScores, totalScores) {
  this.username = username;
  this.diceScores = 0;
  this.totalScores = 0;
}
// Create Random Generator
Players.prototype.roll = function() {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber;
  console.log(randomNumber);
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
    });
    $("#player2Roll").click(function(event) {
      event.preventDefault();
      //console.log(gamer1.roll());
      $(".Player2-diceScores").text(gamer2.roll());
    });
  });
});
