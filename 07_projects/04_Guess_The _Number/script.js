let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('button')
const userInput = document.querySelector('#guess')
const previousGuess = document.querySelector('#previous-guesses')
const attempt = document.querySelector('#attempts')
const message = document.querySelector('#message')
const restart = document.querySelector('#restart')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a valid number")
    }
    else if(guess>100){
        alert("Enter should not be greater than 100!")
    }
    else if (guess < 1){
        alert("Enter number larger than Zero!")
    }
    else{
        prevGuess.push(guess)
        checkGuess(guess)
        displayGuess(guess)
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right number is ${guess}`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    previousGuess.innerHTML += ` ${guess},`
    numGuess++;
}

function displayMessage(msg){
    message.innerHTML = `${msg}`
    attempt.innerHTML =`${numGuess}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    playGame = false
    newGame()
}

function newGame(){
    restart.addEventListener('click',(e) => {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        previousGuess.innerHTML = ''
        attempt.innerHTML = ''
        userInput.removeAttribute('disabled')
        message.innerHTML = 'Start guessing!'
        playGame = true
    })
}



