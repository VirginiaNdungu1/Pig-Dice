// Business Logic
// create player constructor
function Players(username, diceScores, totalScores) {
  this.username = username;
  this.diceScores = 0;
  this.totalScores = 0;
}

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

  });
});
