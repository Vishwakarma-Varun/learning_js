const randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('button')
const userInput = document.querySelector('#guess')
const previousGuess = document.querySelector('#previous-guesses')
const attempt = document.querySelector('#attempts')
const message = document.querySelector('#message')

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
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}



