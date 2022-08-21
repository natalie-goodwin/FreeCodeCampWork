const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Technology", start: 1989, end: 2010},
    {name: "Company Five", category: "Retail", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1990},
]

const ages = [13, 12, 20, 16, 5, 54, 21, 44,61, 13, 15, 45, 25, 64, 32]

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}


//forEach

companies.forEach(function(company) {
    console.log(company.name)
})  

//filter one of three ways:

// get ages 21 and older

let canDrink= [];
for (let i = 0; i < ages.length; i++) {
if(ages[i] >= 21) { /*if ages are 21 and older, they get pushed 
    into another array*/
    canDrink.push(ages[i]) // push in current iteration of ages over 21
}
}
console.log(canDrink)

//OR =>

const canDrink2 = ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
})

console.log(canDrink2)

//OR =>

const canDrink3 = ages.filter(age => age >= 21)
console.log(canDrink3) //best version because it's all one line

//Filter Retail Companies
const retailCompanies = companies.filter (function (company) {
    if (company.category === "Retail") {
        return true;
    }
})

//OR =>

console.log(retailCompanies)

const retailCompanies2 = companies.filter (company => company.category === "Retail")
console.log(retailCompanies2)

//Get 80s companies

const eightiesCompanies = companies.filter (company => (company.start) < 1990)
console.log(eightiesCompanies)

//OR => 

const eightiesCompanies2 = companies.filter (company => (company.start) >= 1980 
&& (company.start) < 1990)
console.log(eightiesCompanies2)


//get companies that lasted ten years or longer
const tenYearCompanies = companies.filter (company => (company.end - 
    company.start >= 10)); 
    console.log(tenYearCompanies)

//map: create new array from current array

//create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
})
console.log(companyNames)

//OR => 

const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
})
console.log(testMap)  /*returns array of company name, with start and 
end date */

//OR =>

const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap2)

//get ages squared

const agesSquare = ages.map (age => Math.sqrt(age))
console.log(agesSquare)

//get ages times two
const agesTimesTwo = ages.map(age => age * 2)

console.log(agesTimesTwo)


// using two maps to square and then multiply
const ageMap = ages 
.map(age => Math.sqrt(age))
.map(age => age * 2)

console.log(ageMap)

//sort
//sort companies by start year -- earliest to latest
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) { /*take two companies and compare them
    poitn is to sort companies in chronological order */
        return 1;
    }   else {
        return -1;
    }
}) /*to have start dates in descending order, use < instead of > */
console.log(sortedCompanies)

//OR =>

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 :
-1)) 
console.log(sortedCompanies2)

//Sort ages lowest to highest

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges) /*for highest to lowest, change 
to (b - a) */

//reduce

let ageSum = 0;
for(let i= 0; i < ages.length; i++) {
    ageSum += ages[i]
}

console.log(ageSum)

//OR =>

const ageSum2 = ages.reduce(function(total, age) {
    return total + age
}, 0) /*start at 0 */

console.log(ageSum2)

// OR => 

const ageSum3 = ages.reduce((total, age) => total + age, 0)

console.log(ageSum3)


//total years for all companies

const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start)
}, 0)
console.log(totalYears)


//OR =>

const totalYears2 = companies.reduce((total, company) => 
total + (company.end - company.start), 0)
console.log(totalYears2)



//combine methods

const combinedAges = ages.map(age => age * 2)
.filter(age => age >= 40)
.sort ((a, b) => a - b)
.reduce((a, b) => a + b , 0)
 /*filter out and under */

console.log(combinedAges)