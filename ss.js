let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    // to check if user gives a valid num 
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number not 0')
    } else if (guess > 100) {
        alert('Please enter a valid number less than hundred')
    } else {
        prevGuess.push()
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over.Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    // in this we will print a message that the value is correct,low,high
    if (guess === randomNumber) {
        displayMessage(`you guess it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    //it will clean value update guess and remaining guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    //this will interact with dom 
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute = ('disable', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }
  