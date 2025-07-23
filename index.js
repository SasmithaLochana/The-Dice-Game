function rollDice() {
  /* Random Number Generator Fot Both Players */
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  /* Assign the corresponding image for player 1 */
  var randomDiceImage = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomDiceImage);

  /* Aassign the corresponding image for player 2 */
  var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomDiceImage2);

  /* Check who's the winner */
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! ❌";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
  }
}

/* Roll dice when page loads */
rollDice();

/* Event listener to the roll again button */
document.getElementById("rollButton").addEventListener("click", rollDice);
