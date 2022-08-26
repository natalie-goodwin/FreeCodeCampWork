// let firstName = "Natalie"
// let lastName = "Goodwin" 
// let fullName = firstName + " " + lastName
// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"

// function greetLinda() {
//     greet = greeting + ", " + name
//     console.log(greet)
// }

// greetLinda()

// let myPoints = 3

// function add3Points() {
//     myPoints+= 3
// }


// function remove1Points() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log (myPoints)

// console.log("2" + 2)   //22
// console.log(11 + 7)  //18
// console.log(6 + "5") //65
// console.log("My points: " + 5 + 9) //My points: 59
// console.log(2 + 2) //4
// console.log("11" + "14") //1114

// let sum = 12 
// if (sum < 21) {
//     console.log("Draw another card.")
// }else if (sum === 21) {
//     console.log("You win!")
// } else {
//     console.log("You lose! Try again.")
// }



// let age = 21

// if (age < 21) {
//     console.log("You cannot enter the club!")
// } else {
//     console.log("Welcome!")
// }



// let age2 = 100

// if (age2 === 100) {
//     console.log("Here is your birthday card from the king!")
// } else if (age2 < 100) {
//     console.log("Not eligible.")
// } else {
//     console.log("Not eligible. You have all ready received a card form the king!")
// }




// let featuredPosts = [
// "Check out my Netflix clone", 
// "Here's the code for my project", 
// "I've relaunched my portfolio"
// ]

// console.log(featuredPosts [0])
// console.log(featuredPosts.length)

// let myExperience = [
//     "Check out my education",
//     "Below you will find the tech projects I created in my bootcamp",
//     "I just got a new certification!"
// ]

// let experience = ["CEO at Scrimba", "Frontend developer at Scrimba", "People counter for Norstat"]

// console.log (experience[1])
// console.log (experience[2])
// console.log (experience[0])


// let aboutMe = [
//     "Natalie Goodwin", 
//     41,
//     true
// ]
// console.log(aboutMe)


// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop(newMessage)
// console.log(messages)


// for(let count = 10; count <21 ; count +=1) {
//     console.log(count)
// } /*increase by 2, answer is 1, 3, 5, 7, 9 */

// for (let i = 0; i <=5; i++) {
//     console.log(i)
// } /*i is only defined within the block scope, and can be reused
// in a new loop below */ 


// for (let i = 10; i < 101; i+=10) {
//     console.log(i)
// } /*counts 10-100 in spaces of 10 */



let messages2 = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear!",
    "Yep"
]

for (let i = 0; i < messages2.length; i+=1) {
    console.log(messages2[i])
}

let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}

let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
} /*adding the empty quotes allows for spacing between each array element */


let player1Time = 102
let player2Time = 104

function getFastestRacetime() {
    if (player1Time < player2Time) {
        return "Player 1 wins! Time: " + player1Time
    } else if (player2Time < player1Time) {
        return "Player 2 wins! Time: " + player2Time
    } else {
        return "It's a tie!"
    }
}

let fastestRace = getFastestRacetime()
console.log(fastestRace)

let totalTime = player1Time + player2Time

function totalRaceTime() {
    console.log(totalTime)
}

totalRaceTime()



/* OR */


function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime1= getTotalRaceTime()

console.log(totalTime1)

let randomNumber = Math.random() * 6

console.log (randomNumber)

/*What does Math.random() do?
Answer: It generates a random number between 0 and 1 (
    not inclusive of 1; but it isn't truly random)
    With math.random * 6, in which range will randomNumber 
    be?     From: 0  To: 5.999   
    */

let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)

/*What does Math.floor() do to positive numbers? 
It rounds to the whole number by removing the decimaled 
numbers*/


let randomNumber1 = Math.floor ( Math.random() * 6 ) + 1

console.log(randomNumber1)

/*What are all the possible values randomNumber1 can hold?
  0-5: 0, 1, 2, 3, 4, 5*/

  function rollDice() {
    let randomNumber1 = Math.floor ( Math.random() * 6 ) + 1
    return randomNumber1
}
   console.log(rollDice())
  
/*logical operators: and/or */

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate() 
} 

function generateCertificate() {
    console.log("generating certificate")
}


let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution")
}


let likesDocumentaries = false
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}





