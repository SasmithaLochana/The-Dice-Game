function rollDice() {
  /* Random Number Generator Fot Both Players */
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  /* Check the number that got player 1 and assign the corresponding image */
  if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }

  /* Check the number that got player 2 and assign the corresponding image */
  if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }

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