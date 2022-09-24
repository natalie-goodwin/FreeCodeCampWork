/*methods for manipulating DOM: 5 main selectors: 
getElementById() 
select a DOM element by its unique ID


getElementByClassName()
select an element by class name

getElementByTagName()
accepts a tag name and returns all the elements of the 
specified tag name in the order in which they appear 
in the document

querySelector()
used to select the first item that matches the given
selector; if you have multiple items with the same id, 
class name, or tag, it will select the first one it comes across

querySelectorAll()
*/

//getElementById() 

// const title = document.getElementById("main-heading");
// console.log(title)

// //getElementByClassName()
// const listItem = document.getElementsByClassName("list-items")
// console.log(listItem)

// // getElementByTagName()

// const tagName = document.getElementsByTagName("li")
// console.log(tagName)

// // querySelector()
// const container = document.querySelector("div")
// console.log(container) /*returns only the nodes within 
// the first selector*/

// // querySelectorAll()

// const div = document.querySelectorAll("div")
// console.log(div) /*returns a node list collection of all elements
// matching the specific selector*/

// //Changing style of an element

const title2 = document.querySelector("#main-heading")
console.log(title2)
/*to access css properties in JS: grab the variable you 
want to apply style to, add 'style' then name of css 
property; you do this with the dot method
 */

title2.style.color = "red"; //inline styling; will only work on a single element

const listItems = document.querySelectorAll("list-items")
// console.log(listItems)

/*listItems.style.fontSize = "2rem" [this won't work because
it's trying to aplly to more than one element; you must first loop 
through the list items as below] */

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '15rem'
}
console.log(listItems);

//Creating Elements

const ul = document.querySelector("ul")
const li = document.createElement("li")
ul.append(li) //append method

//Modifying the text
const firstListItem = document.querySelector('.list-items')
console.log(firstListItem);

console.log(firstListItem.innerText); //only get visible text within the node
console.log(firstListItem.textContent); //being displayed the same as with the HTML file
console.log(firstListItem.innerHTML);/*includes the span tag inside the HTML;
there's a security issue with innerHTML: you don't want
user input displayed in innerHTML because it allows the user
to control the JS and HTML on the webpage; so mostly use innterText */

li.innerText = 'X-MEN';

//Modifying attributes and classes

//set attribute method; sets attribute to a specified method
li.setAttribute('id', 'main-heading') //include attribute you want to set, and the name you want to give the attribute
li.removeAttribute('id')

const title = document.querySelector("#main-heading")
console.log(title.getAttribute('id'))