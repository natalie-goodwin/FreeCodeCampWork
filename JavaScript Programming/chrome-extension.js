//saving leads

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)


// /*below is better way to make button clickable, and push 
// to the myLeads array*/
// inputBtn.addEventListener("click", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// }) /*we will listen for the click and invoke a function */

/*IMPROVED FROM ABOVE: push the value from the input 
field instead of the above array*/
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}/*render the leads in the unordered list */

/*using createElement() and append() instead of innerHTML*/
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}/*render the leads in the unordered list */












//ORIGINAL: make button clickable below: 
// function buttonClicked() {
//     console.log("Button clicked!")
// } /*this allows us to make button clickable */
// in html you would add an onclick="buttonClciked()"