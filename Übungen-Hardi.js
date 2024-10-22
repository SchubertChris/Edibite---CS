import readlinesync from 'readline-sync';


let numbers = [1, 2, 3, 4, 5];

function sum(numbers) {
  return numbers[0];
}

console.log(sum(numbers));

// --------------------------------------------

function greetings() {
  return 'Hello, World!';
}


console.log(greetings());

// --------------------------------------------

function hello() {}

console.log(hello());

// --------------------------------------------

function add(a, b) {
  return a + b;
}

console.log(add(109, 56));

// --------------------------------------------

function toSeconds(minutes) {
  return minutes * 60;
}

console.log(toSeconds(5));

// --------------------------------------------

function toDays (years) {
  return years * 365;
}

console.log(toDays(5));

// --------------------------------------------

function zero (a) {

  if (a === 0 || a < 0) {
    return true;}
    else {
      return false;
  }
}

console.log(zero(0));
console.log(zero(5));


// --------------------------------------------

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

console.log(isDivisible(10, 2));


// --------------------------------------------

let a = true;
let b = false;

function isTrue(a, b) {
  return a && b;
}

console.log(isTrue(a, a));
console.log(isTrue(a, b));
console.log(isTrue(b, b));

// --------------------------------------------


function dazu (a) {
  return a + 1;
}

console.log(dazu(5));

// --------------------------------------------

function angle (a, b) {
  return a * b / 2;
}

console.log(angle(10, 10));

// --------------------------------------------

function nameString (name) {
  return name + 'Edabit';
}

console.log(nameString('Mubashir'));

// --------------------------------------------

function addi (a, b) {
    if (a + b < 100) {
      return true;
    } else {
      return false;
    }
}

console.log(addi(5, 5));

// --------------------------------------------

function addii(a, b) {
  return a + b < 100;
}

console.log(addii(5, 94));

// --------------------------------------------

function numberOfDgits (a) {
  return a.toString().length;
  }

console.log(numberOfDgits(2333));

// --------------------------------------------


function generation(x, y) {
  const generations = {
      "-3": { "m": "great grandfather", "f": "great grandmother" },
      "-2": { "m": "grandfather", "f": "grandmother" },
      "-1": { "m": "father", "f": "mother" },
      "0": { "m": "me!", "f": "me!" },
      "1": { "m": "son", "f": "daughter" },
      "2": { "m": "grandson", "f": "granddaughter" },
      "3": { "m": "great grandson", "f": "great granddaughter" }
  };

  return generations[x][y] || "Invalid input";
}

// Beispiele
console.log(generation(2, "f"));  // ➞ "granddaughter"
console.log(generation(-3, "m")); // ➞ "great grandfather"
console.log(generation(1, "f"));  // ➞ "daughter"


// --------------------------------------------

let toArray = (obj) => {
  return Object.entries(obj); // Object.entries() gibt ein Array zurück, das aus den eigenen aufzählbaren Eigenschaften des Objekts besteht
}

console.log(toArray({ a: 1, b: 2 })); // ➞ [["a", 1], ["b", 2]] 
console.log(toArray({ shrimp: 15, tots: 12 })); // ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({ })); // ➞ []

// --------------------------------------------


let guess = (n) => {
  return n === Math.floor(Math.random() * 5) + 1 ? "You guessed right!" : "You guessed wrong!";
}

console.log(guess(1)); // ➞ "You guessed wrong!"
console.log(guess(5)); // ➞ "You guessed right!"

