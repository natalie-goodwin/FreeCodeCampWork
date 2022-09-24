/*Beginning at line 444 are note I need to elaborate on 
for articles: Block Scope Vs. Global Scope */

// // let firstName = "Natalie"
// // let lastName = "Goodwin" 
// // let fullName = firstName + " " + lastName
// // console.log(fullName)

// // let name = "Linda"
// // let greeting = "Hi there"

// // function greetLinda() {
// //     greet = greeting + ", " + name
// //     console.log(greet)
// // }

// // greetLinda()

// // let myPoints = 3

// // function add3Points() {
// //     myPoints+= 3
// // }


// // function remove1Points() {
// //     myPoints -= 1
// // }

// // add3Points()
// // add3Points()
// // add3Points()
// // remove1Points()
// // remove1Points()

// // console.log (myPoints)

// // console.log("2" + 2)   //22
// // console.log(11 + 7)  //18
// // console.log(6 + "5") //65
// // console.log("My points: " + 5 + 9) //My points: 59
// // console.log(2 + 2) //4
// // console.log("11" + "14") //1114

// // let sum = 12 
// // if (sum < 21) {
// //     console.log("Draw another card.")
// // }else if (sum === 21) {
// //     console.log("You win!")
// // } else {
// //     console.log("You lose! Try again.")
// // }



// // let age = 21

// // if (age < 21) {
// //     console.log("You cannot enter the club!")
// // } else {
// //     console.log("Welcome!")
// // }



// // let age2 = 100

// // if (age2 === 100) {
// //     console.log("Here is your birthday card from the king!")
// // } else if (age2 < 100) {
// //     console.log("Not eligible.")
// // } else {
// //     console.log("Not eligible. You have all ready received a card form the king!")
// // }




// // let featuredPosts = [
// // "Check out my Netflix clone", 
// // "Here's the code for my project", 
// // "I've relaunched my portfolio"
// // ]

// // console.log(featuredPosts [0])
// // console.log(featuredPosts.length)

// // let myExperience = [
// //     "Check out my education",
// //     "Below you will find the tech projects I created in my bootcamp",
// //     "I just got a new certification!"
// // ]

// // let experience = ["CEO at Scrimba", "Frontend developer at Scrimba", "People counter for Norstat"]

// // console.log (experience[1])
// // console.log (experience[2])
// // console.log (experience[0])


// // let aboutMe = [
// //     "Natalie Goodwin", 
// //     41,
// //     true
// // ]
// // console.log(aboutMe)


// // let messages = [
// //     "Hey, how's it going?",
// //     "I'm great, thank you! How about you?",
// //     "All good. Been working on my portfolio lately."
// // ]

// // let newMessage = "Same here!"

// // messages.push(newMessage)
// // console.log(messages)

// // messages.pop(newMessage)
// // console.log(messages)


// // for(let count = 10; count <21 ; count +=1) {
// //     console.log(count)
// // } /*increase by 2, answer is 1, 3, 5, 7, 9 */

// // for (let i = 0; i <=5; i++) {
// //     console.log(i)
// // } /*i is only defined within the block scope, and can be reused
// // in a new loop below */ 


// // for (let i = 10; i < 101; i+=10) {
// //     console.log(i)
// // } /*counts 10-100 in spaces of 10 */



// let messages2 = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear!",
//     "Yep"
// ]

// for (let i = 0; i < messages2.length; i+=1) {
//     console.log(messages2[i])
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// } /*adding the empty quotes allows for spacing between each array element */


// let player1Time = 102
// let player2Time = 104

// function getFastestRacetime() {
//     if (player1Time < player2Time) {
//         return "Player 1 wins! Time: " + player1Time
//     } else if (player2Time < player1Time) {
//         return "Player 2 wins! Time: " + player2Time
//     } else {
//         return "It's a tie!"
//     }
// }

// let fastestRace = getFastestRacetime()
// console.log(fastestRace)

// let totalTime = player1Time + player2Time

// function totalRaceTime() {
//     console.log(totalTime)
// }

// totalRaceTime()



// /* OR */


// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime1= getTotalRaceTime()

// console.log(totalTime1)

// let randomNumber = Math.random() * 6

// console.log (randomNumber)

// /*What does Math.random() do?
// Answer: It generates a random number between 0 and 1 (
//     not inclusive of 1; but it isn't truly random)
//     With math.random * 6, in which range will randomNumber 
//     be?     From: 0  To: 5.999   
//     */

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

// /*What does Math.floor() do to positive numbers? 
// It rounds to the whole number by removing the decimaled 
// numbers*/


// let randomNumber1 = Math.floor ( Math.random() * 6 ) + 1

// console.log(randomNumber1)

// /*What are all the possible values randomNumber1 can hold?
//   0-5: 0, 1, 2, 3, 4, 5*/

//   function rollDice() {
//     let randomNumber1 = Math.floor ( Math.random() * 6 ) + 1
//     return randomNumber1
// }
//    console.log(rollDice())
  
// /*logical operators: and/or */

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate() 
// } 

// function generateCertificate() {
//     console.log("generating certificate")
// }


// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution")
// }


// let likesDocumentaries = false
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// /*objects store data in-depth; objects are also called composite
// or complex data types with key-value pairs */

// let course = {
//     title: "Learn CSS Grid for free", 
//     lessons: 16, 
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.title) /*dot notation */
// console.log(course.lessons)
// console.log(course.creator)
// console.log(course.length)
// console.log(course.level)
// console.log(course.isFree)
// console.log(course.tags)

// let airBnbCastle = {
//     name: "Princess Isabella's Castle" ,
//     forRent: true,
//     nightlyRent:  150,
//     details: ["date built: abt. 1602", "NRHP listing: 1980"]
// }    


// console.log(airBnbCastle.name)
// console.log(airBnbCastle.forRent)
// console.log(airBnbCastle.nightlyRent)
// console.log(airBnbCastle.details)

// /*methods are functions attached to objects, usually using the
// dot notation */

// let aboutMe = {
//     name: "Natalie",
//     age: 41,
//     country: "United States"
// }

// function logData() {
//     console.log( aboutMe.name + " is " + aboutMe.age + " years old and lives in the " + aboutMe.country)
// }

// logData()

// let age = 80

// // if (age < 6 ) {
// //     console.log("free") 
// // } else if (age >= 6 && age <= 17) {
// //     console.log("child discount")
// // } else if (age >= 18 && age <= 26) {
// //     console.log("student discount") 
// // } else if (age >= 27 && age <= 66) {
// //     console.log("full price") 
// // } else {
// //     console.log("senior citizen discount") 
// // }

// if (age < 6 ) {
//     console.log("free") 
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount") 
// } else if (age < 66) {
//     console.log("full price") 
// } else {
//     console.log("senior citizen discount") 
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The five largest countries in the world: ")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// } /*loops through the names in the array */

// let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries2.pop("Monaco")
// console.log(largeCountries2) /*removes Monaco from end of array */

// largeCountries2.shift("Tuvalu")
// console.log(largeCountries2) /*removes Tuvalu from front of array */

// largeCountries2.push("Pakistan")
// console.log(largeCountries2) /*pushes Pakistan to end of array */

// largeCountries2.unshift("China")
// console.log(largeCountries2) /*pushed China to front of array */

// let dayOfMonth = 13
// let weekday = "Friday" 

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log ("😱")
// }

// let hands = ["rock", "paper", "scissor"]

// // function getHand() {
// //     let randomIndex = Math.random()    
// // } return randomIndex

// // console.log(getHand())

// function getHand2() {
//     let randomIndex2 = Math.floor (Math.random() * 3) 
//     return hands[randomIndex2]
// }
// console.log(getHand2())  /*returns hands */


// // sorting fruit by different shelves below
// let fruit = ["🍎", "🔶", "🍎", "🍎", "🔶", "🍌", "🍌","🍌","🍌"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")
// let bananaShelf = document.getElementById("banana-shelf")

// function sortFruit() {
//      for (let i = 0; i <fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🔶") {
//             orangeShelf.textContent += "🔶"
//         } else {
//             bananaShelf.textContent += "🍌"
//         }
//      }
// }
// sortFruit()

// let box = document.getElementById("box")

// box.addEventListener("click", function() {
//     console.log("I want to open the box!")
// }) /*we will listen for the click and invoke a function */

// /*if possible, default to const, unless something has 
// to be reassigned later; below we change to const what works*/


// const basePrice = 520
// const discount = 120
// let shippingCost = 12 // must stay let b/c it changes
// let shippingTime = "5-12 days" //must stay let b/c it changes

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


// //innerHTML 

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// } /*this allows for a paragraph to be added under the 
// Buy button */


//create a function that logs out the number 42
// function number() {
//     console.log(42)
// }
// number()

//create a function that logs out the sum of the lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapSum() {
    console.log (lap1+lap2+lap3)
}
lapSum()

//second way of above 
function lapSum() {
    let totalSum= lap1 + lap2 + lap3
    console.log (totalSum)
}
lapSum() 

/* note: a function can access the variables from the 
global scope (outer scope); however, if you console.log 
from the outer scope it will read "invalid or unexpected 
token"; this is because when you define a variable within 
the function's scope it only exists inside that block of 
code (block scoped);  study more on scope*/ 

let lapsCompleted = 0

/*create a function to increment the lapsCompleted variable
with one*/
//Run it three times


function incrementLap() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

incrementLap()
incrementLap()
incrementLap()
