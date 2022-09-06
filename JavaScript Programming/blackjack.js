
let player = {
    name: "Per", 
    chips: 145
} /*creating an object with name as the key "Per" as
the value, and chips as the key and 145 as the value */
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false /*you haven't started game, so you aren't alive */
let message = ""
let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") /*more dynamic
// than getElementById; querySelector requires id # symbol */
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

console.log(cards) /*will show empty cards array because game 
has not started */


/*return a random number between 1 and 13 */
function getRandomCard() {
            let randomNumber = Math.floor (Math.random() * 13) + 1
            if (randomNumber > 10) {
                return 10
            } else if (randomNumber === 1) {
                return 11
            } else {
                return randomNumber
            }
        }

function startGame() {
    isAlive = true /*player has walked in and is alive */
    let firstCard = getRandomCard() /*reassigning first and second 
    cards to random*/
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] /*cards array initially holds 
    first and second cards */
    sum = firstCard + secondCard 
    /*sum is first and second card added together*/

    renderGame() /*we will render game anytime we hit startGame() 
    and re-render the game through new card; also generate cards
    in startGame() */
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard() /*hard coding value */
    sum += card   
    cards.push(card) 
    renderGame() /*call inside the function */
    }     
}

/*logical operators allows you to combine multiple conditions
inside and if statement*/








//method: a function on an object

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




























