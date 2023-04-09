// Homework 3-28
//1. Create an array with 10 items
var cities = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

//2. Update one of the items
cities.splice(1, 1, "Athens");
console.log(cities);

//3. Delete half of the array
cities.splice(5, 5);
console.log(cities);

//4. Array Methods
// pop
var citiesOne = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

citiesOne.pop();
console.log(citiesOne);

// push
var citiesTwo = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

citiesTwo.push("Lisbon");
console.log(citiesTwo);

// shift
var citiesThree = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

citiesThree.shift();
console.log(citiesThree);

// unshift
var citiesFour = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

citiesFour.unshift("Cairo");
console.log(citiesFour);

// concatenating
var citiesNew = ["Hong Kong", "Mexico City", "Rome"];
citiesAll = citiesFour.concat(citiesNew);
console.log(citiesAll);

// splicing
citiesAll.splice(9, 5);
console.log(citiesAll);

// slicing
var citiesSliced = citiesAll.slice(3, 6);
console.log(citiesAll, citiesSliced);

// reverse
citiesAll.reverse();
console.log(citiesAll);

// join
let together = citiesAll.join(" and ");
console.log(together);

// forEach;
var citiesAgain = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

function handler(item, index, array) {
  console.log(item, index, array);
}

citiesAgain.forEach(handler);

// includes
console.log(citiesAgain.includes("Paris"));

// indexOf
console.log(citiesAgain.indexOf("Toronto"));

// every
var heightInCm = [160, 156, 172, 165, 180, 159];

var result = heightInCm.every(handlerHeight);

function handlerHeight(item) {
  return item > 160;
}
console.log(result);

// some
var result = heightInCm.some(handlerHeight);

function handlerHeight(item) {
  return item === 156;
}
console.log(result);

// filter
var citiesAgain = [
  "London",
  "Paris",
  "Tokyo",
  "Milan",
  "Barcelona",
  "New York",
  "Shanghai",
  "Melbourne",
  "Toronto",
  "Cape Town",
];

var result = citiesAgain.filter(checkCity);

function checkCity(item) {
  return item.length > 6;
}

console.log(result);

// Find;
var subjects = [
  "History",
  "Geography",
  "Spanish",
  "Math",
  "Chemistry",
  "Biology",
];

var found = subjects.find(function (item) {
  return item.length > 7;
});

console.log(found);

// findIndex
var countries = [
  "Amsterdam",
  "Croatia",
  "Turkey",
  "Cyprus",
  "Malta",
  "Canary Islands",
  "Finland",
];

var result = countries.findIndex(checkCountry);

function checkCountry(item) {
  return item.length > 8;
}

console.log(result);

// sort

var sortedCountry = countries.sort();
console.log(sortedCountry);

// Map
var primeNumber = [1, 2, 3, 5, 7, 9, 11, 13, 17, 19];

var newPrime = primeNumber.map(function (item) {
  return item * 10;
});

console.log(newPrime);
