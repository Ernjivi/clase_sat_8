
// Cache DOM
var board = document.querySelector('#board');
var player1Score = board.querySelector('#player1 .score');
var player2Score = board.querySelector('#player2 .score');
var player1Hold = board.querySelector('#player1 .hold');
var player2Hold = board.querySelector('#player2 .hold');
var acumulado = board.querySelector('#acumulado');
var dice = board.querySelector('#dice');
var rollDiceButton = board.querySelector('#rollDice');

// Inicializamos el juego
var acumuladoValue = 0;
var scores = [0, 0]
var player1Turn = true;

// Tirar el dado
function rollDice(){
    return Math.floor(Math.random() * 6) + 1; 
}

function changeTurn(){
    player1Turn = !player1Turn;
    acumuladoValue = 0;
}

// rollDiceButton.addEventListener('click', function(){
    // 
// });

rollDiceButton.addEventListener('click', () => {
    let diceValue = rollDice()
    dice.textContent = diceValue;
    if(diceValue === 1){
        changeTurn();
    } else{
        acumuladoValue += diceValue;
    }
    acumulado.textContent = acumuladoValue;
});


