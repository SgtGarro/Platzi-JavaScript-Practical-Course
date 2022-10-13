// Variables

// Quest 3

var name = "Marcelo";
var lastName = "Garro";
var userName = "SgtGarro";
var age = 19;
var email = "marcelogarro137@gmail.com";
var adult = true;
var savedMoney = 1000;
var debts = 20;

// Quest 4
console.log(`${name} ${lastName}`);
console.log(savedMoney - debts);

// Functions

function presentation(name, lastName, nickname) {
  return console.log(
    `My name is ${name} ${lastName}, but I would like you call me ${nickname}.`
  );
}

presentation(name, lastName, "Marce");

// Conditionals

const subscriptionType = "Basic";

if (subscriptionType == "Free") {
  console.log("You can only take free courses.");
} else if (subscriptionType == "Basic") {
  console.log("You can take almost every courses for a month.");
} else if (subscriptionType == "Expert") {
  console.log("You can take almost every courses for a year.");
} else if (subscriptionType == "ExpertPlus") {
  console.log(
    "You and your partner can take EVERY courses from Platzi for a year."
  );
}

// Bucles

var i = 0;
while (i < 5) {
  console.log("The value of i is: " + i);
  i++;
}

var i = 10;
while (i >= 2) {
  console.log("The value of i is: " + i);
  i--;
}

// Array

var myArray = ["Santi", "Juan", "Diego", "Jose"];

function printFirst(array) {
  console.log(array[0]);
}

function printArray(array) {
  for (var i = 0; i < array.lenght; i++) {
    console.log(`${i} ${array[i]}`);
  }
}

function prinArrayObject(object) {
  for (var atr in object) {
    console.log(object[atr]);
  }
}
