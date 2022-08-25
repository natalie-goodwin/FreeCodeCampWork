let firstName = "Natalie"
let lastName = "Goodwin" 
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

function greetLinda() {
    greet = greeting + ", " + name
    console.log(greet)
}

greetLinda()

let myPoints = 3

function add3Points() {
    myPoints+= 3
}


function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

console.log (myPoints)

console.log("2" + 2)   //22
console.log(11 + 7)  //18
console.log(6 + "5") //65
console.log("My points: " + 5 + 9) //My points: 59
console.log(2 + 2) //4
console.log("11" + "14") //1114

let sum = 12 
if (sum < 21) {
    console.log("Draw another card.")
}else if (sum === 21) {
    console.log("You win!")
} else {
    console.log("You lose! Try again.")
}



let age = 21

if (age < 21) {
    console.log("You cannot enter the club!")
} else {
    console.log("Welcome!")
}



let age2 = 100

if (age2 === 100) {
    console.log("Here is your birthday card from the king!")
} else if (age2 < 100) {
    console.log("Not eligible.")
} else {
    console.log("Not eligible. You have all ready received a card form the king!")
}




let featuredPosts = [
"Check out my Netflix clone", 
"Here's the code for my project", 
"I've relaunched my portfolio"
]

console.log(featuredPosts [0])
console.log(featuredPosts.length)

let myExperience = [
    "Check out my education",
    "Below you will find the tech projects I created in my bootcamp",
    "I just got a new certification!"
]

let experience = ["CEO at Scrimba", "Frontend developer at Scrimba", "People counter for Norstat"]

console.log (experience[1])
console.log (experience[2])
console.log (experience[0])


let aboutMe = [
    "Natalie Goodwin", 
    41,
    true
]
console.log(aboutMe)


let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop(newMessage)
console.log(messages)












