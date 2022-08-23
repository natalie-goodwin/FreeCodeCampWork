let firstCard = 2
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//With message on screen, instead on console:


let messageEl = document.getElementById("message-el")
//console.log(messageEl)
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") /*more dynamic
than getElementById; querySelector requires id # symbol */
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame() /*we will render game anytime we hit startGame() 
    and re-render the game through new card */
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard  + " & " + secondCard
    sumEl.textContent = "Sum: " + sum
     if (sum <= 20) {
        message = "Draw another card."        
    } else if (sum === 21) {
        message = "You won!"      
        hasBlackJack = true
    } else {
        message = "You lose. Play again."       
        isAlive = false
    }
    messageEl.textContent = message
    //sumEl.textContent = sumEl
}



function newCard() {
    let card = 3 /*hard coding value */
    sum += card
    renderGame() /*call inside the function */
}















/*console.log(hasBlackJack)
console.log(isAlive)*/


//with message in console:
// function startGame() {
//     if (sum <= 20) {
//         message = "Draw another card."
//     } else if (sum === 21) {
//         message = "You won!"
//         hasBlackJack = true
//     } else {
//         message = "You lose. Play again."
//         isAlive = false
//     }
//     console.log(message)
// }

// /*console.log(hasBlackJack)
// console.log(isAlive)*/




























