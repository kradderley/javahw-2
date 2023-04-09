// Homework 3-30

// 1.	Create a function, inside the function add a second function, and again add a third function into the second function.
function person() {
  return function () {
    return function () {};
  };
}

// 2.	Create 3 variables.
var firstName;
var age;
var heightInCm;

// 3.	Define 3 the variables in the correct place so that:
// a.	The first variable is accessible inside every function.
// b.	The second variable is accessible inside the second and third function only.
// c.	The third variable is accessible inside the third function only.

function person() {
  var firstName = "Khes";
  console.log(`Hello, name is is ${firstName}`);
  return function () {
    var age = 25;
    console.log(`Hello, name is is ${firstName} and I am ${age} years old`);
    return function () {
      var heightInCm = 160;
      console.log(
        `Hello, name is is ${firstName}, I am ${age} years old and ${heightInCm}cm tall`
      );
    };
  };
}

let myFunction = person();
myFunction();

// 6. Create an object which contains a function which console.logs this.something, where something is any name you like.
const obj = {
  town: "Suffolk County",
  city: "Las Vegas",
  state: "Nevada",
  address: function () {
    console.log(
      `Hello, my address is ${this.town}, ${this.city}, ${this.state}.`
    );
  },
};

obj.address();

// 7. Create an object that contains information about the make/model of a car
// 8. Create a function outside the object which returns the make/model of the car
// 9. Insert a reference to the function into the object created
const car = {
  make: "Toyota",
  model: "Camry",
  carType: carType,
};

function carType() {
  console.log(`My favorite kind of car is a ${car.make} ${car.model}`);
}

// 10. Invoke the method on the object (you should see the make/model)

car.carType();

// 11. Use call to execute the function using a different context

const carTwo = {
  make: "Toyota",
  model: "Camry",
  carType: function () {
    console.log(`I own a ${this.make} ${this.model}.`);
  },
};

carTwo.carType.call({ make: "Dodge", model: "Charger" });

// 12. Use bind to create an instance of the function that is bound to a different object

const carBind = carTwo.carType.bind({ make: "Chevrolet", model: "Malibu" });
carBind();

// 13. Use a try/catch block to ensure you understand the syntax
try {
  console.log("Hello, I am Khes");
  console.log("I live in Paris");
  console.log(france);
} catch (error) {
  console.log("What is happening in France?");
}

// 17. Use a ternary
var miles = 600;
var distance =
  miles > 500
    ? "Stop to the nearest gas station!"
    : "Keep going, you still have some gas";

console.log(distance);

// 14. Create a timer that runs once
// 15. Create a timer that runs many times
// 16. Clear one of the timers

function handler() {
  console.log("But learning to code can be tricky");
}

function handlerTwo() {
  console.log("Hopefully, I can learn how to code");
}

console.log("I think I want to learn how to code");
setTimeout(handler, 1000);
const handlerTwoTimer = setInterval(handlerTwo, 2000);

setInterval(function () {
  clearInterval(handlerTwoTimer);
}, 8 * 1000);
