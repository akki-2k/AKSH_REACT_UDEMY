let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
// const submit = document.querySelector('');
const guessSlot = document.querySelector(".guesses");
const userInput = document.getElementById("guessField");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuesses = [];
let numGuesses = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter valid no");
  } else if (guess > 100 && guess < 1) {
    alert("enter no betwn 1 to 100");
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`game Over. Random no was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Correct Guess`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Grater than random no`);
  } else if (guess < randomNumber) {
    displayMessage(`smaller than random no`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  playgame=false;
  newgame();
}
function newgame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', ()=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses=[]
        numGuesses=1;
        guessSlot.innerHTML="";
        remaining.innerHTML =`${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame=true;
    })
}
