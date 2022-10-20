//count numbers 1-100
//if number is %3 "fizz"
//else if number is %5 "buzz"
//else if number is %3 && %5 "fizz buzz" 
//else just show number which will be in for loop as "i"

for (let i=1; i<= 600; i++) {
    
    
    if (i % 3 === 0) {
        console.log("fizz")
    }
    else if (i % 5 === 0) {
        console.log("buzz")
    }
   if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz")
    }
    else {
        console.log(i)
    }
}