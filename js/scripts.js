// Business Logic
// create player constructor
function Players(username, turnScores, totalScores) {
  this.username = username;
  this.currentScore = turnScores;
  this.tallyScore = totalScores;
}

//user interfaceplayer1Name
//
$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();
    var player1UserName = $("input#player1-userName").val();
    var player2UserName = $("input#player2-userName").val();
    $(".player1Name").text(player1UserName);
    $(".player2Name").text(player2UserName);
  });
});
