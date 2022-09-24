//document.getElementById("count-el").innerText= 5

// let firstBatch = 5
// let secondBatch = 7

//let count = firstBatch + secondBatch


//   let count = 5

//   count = count + 2

//    let bonusPoints = 50
//    console.log(bonusPoints)

//    bonusPoints = bonusPoints + 50

// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log (bonusPoints)


//  let myAge = 41
//  let humanDogRatio = 7
 
//  myDogAge = myAge * humanDogRatio
 
//  console.log(myDogAge)

//Javascript recognizes if you reference a value before it has been initialized

// create an Increment button with the id="increment-btn"
 

// function increment() {
//     console.log("The button was clicked")
// }


// function countdown() {
//     console.log (5)
//     console.log (4)
//     console.log (3)
//     console.log (2)
//     console.log (1)
// }
// countdown()


// function awesomeJavaScript() {
//     console.log(42)
// }

// awesomeJavaScript()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapSum () {
//     console.log(lap1 + lap2 + lap3)
// }

// totalLapSum()

// /* or 2nd way below  */ 

// function totalLapSum () {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// totalLapSum()

/*the problem with the 2nd way is that if
you try to console.log(totalTime) outside 
of the function, it is outside that block
of code, and only exists within that block
of code  */

// let lapsCompleted  = 0

// function totalLapsCompleted (){
//     lapsCompleted = lapsCompleted + 1
//     //console.log(lapsCompleted)
// }

// totalLapsCompleted()
// totalLapsCompleted()
// totalLapsCompleted()

// console.log(lapsCompleted)



/*This code allows us to increment the button */ 
let saveEl=document.getElementById("save-el")

console.log(saveEl)

let countEl= document.getElementById("count-el")

let count = 0

function increment() { /*function to increment 
a count and attach to button; executed anytime this 
action is invoked with the onClick event in HTML*/
    count += 1 //short cut for count = count + 1
    countEl.innerHTML = count
}

increment()


function save() { /*saves the count you 
increment, when clicking the button */
    let countString = count + " - "
    saveEl.innerHTML += countString
    /*textContent adds spacing */
   countEl.innerHTML = 0 /*on save, return count
   to 0 */
   count = 0 /* */
console.log(count)

}

























// let userName = "Jane"
// let message = "You have three new notifications"

// let messageToUser = message + ", " + userName + "!"
// console.log(messageToUser)


// let myName = "Natalie"
// let greeting = "Hi, my name is " 

// let message2 = greeting + myName

// console.log(message2)

// console.log(4+5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// // 9
// // 24
// // 51
// // 100100






// //let welcomeEl = theGreeting + theName + "!"
// //console.log(welcomeEl)

// // let welcomeEl = document.getElementById("welcome-el")
// // let theName = "Natalie"
// // let theGreeting = "Welcome back, "
// // welcomeEl.innerText = theGreeting + theName + "!"

// // //welcomeEl.innerText = welcomeEl.innerText + "😊"

// // /*or */

// // welcomeEl.innerText += "😊"






