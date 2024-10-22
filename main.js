// Task1

function IsNumberInRange (a, b, c)
{
    return a > b && a < c;
}

console.log(IsNumberInRange(3, 1, 5)); // true
console.log(IsNumberInRange(3, 1, 3)); // false

// -------------------------------------------- Task2

function IsEndingIng (str)
{
    return str.slice(-3) == "ing";
}

console.log(IsEndingIng("string")); // true
console.log(IsEndingIng("str")); // false

// -------------------------------------------- Task3

function startsWithThe (str)
{
    return str.slice(0, 3) == "The";
}

console.log(startsWithThe("The string")); // true
console.log(startsWithThe("string")); // false

// -------------------------------------------- Task4

function IsFirstLetterLowercase (str)
{
    return str[0] == str[0].toLowerCase();
}

console.log(IsFirstLetterLowercase("string")); // true
console.log(IsFirstLetterLowercase("String")); // false

// -------------------------------------------- Task5

const prices = [19.99, 29.87, 12.99, 5.00, 2.90, 100];
const userPrice = [];

function cheeperThan (prices, a)
{
    let sum = 0;
    for (let i = 0; i < prices.length; i++)
    {
        if (prices[i] < a) {
          userPrice.push(prices[i]);
            sum += prices[i];
        }
    }
    return userPrice;
}

console.log(cheeperThan(prices, 20)); // [19.99, 12.99, 5, 2.9]

// -------------------------------------------- Task6

const words = ["string", "stringing", "stringed", "stringer", "stringest, jeans, Peter, Olaf, Herbert"];

let newWords = [];

function wordTHatEndWithIng (words)
{
    for (let i = 0; i < words.length; i++)
    {
        if (words[i].slice(-3) == "ing")
        {
            newWords.push(words[i]);
        }
    }
    return newWords;
}

console.log(wordTHatEndWithIng(words)); // [ 'stringing', 'stringed' ]

// -------------------------------------------- Task7

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isDevisible = [];

function isDevisibleBy3 (numbers)
{
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 3 == 0)
        {
            isDevisible.push(numbers[i]);
        }
    }
    return isDevisible;
}


console.log(isDevisibleBy3(numbers)); // [ 3, 6, 9 ]

// -------------------------------------------- Task8


console.log(correctWords("Hallo was geht bei dir Heute aaaaaab"));
function correctWords(sentence) {
  const words = sentence.split(' '); // splitten
  const correctWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      correctWords.push(words[i]);
    }
  }

  return correctWords;
}

console.log(correctWords("Hallo was geht bei dir Heute aaaaaab")); 


// -------------------------------------------- Task9

function addLeadingZero(numbers) {
  return numbers.map(num => {
      return num < 10 ? '0' + num : num.toString();
  });
}

console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12]));
console.log(addLeadingZero([1, 100])); 
console.log(addLeadingZero([1, 2, 3])); 

// -------------------------------------------- Task10

function cutStrings(sentences, length) {
  return sentences.map(sentence => {
      if (sentence.length > length) {
          return sentence.slice(0, length) + "...";
      } else {
          return sentence;  
      }
  });
}

console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10));


console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2));

// -------------------------------------------- Task11

function durationInHours(movieDurations) {
  return movieDurations.map(duration => Math.floor(duration / 60));
}

console.log(durationInHours([120, 60, 80, 90, 100])); 
console.log(durationInHours([50, 20, 180])); 


// -------------------------------------------- Task12


function reverseWords(words) {
  return words.map(word => word.split('').reverse().join(''));
}

// Beispiele
console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"])); 

// -------------------------------------------- Task13

function countConsonants(str) {
  // Konsonanten definieren (alle Buchstaben außer a, e, i, o, u)
  const consonants = str.match(/[b-df-hj-np-tv-z]/gi);
  // Rückgabe der Anzahl der Konsonanten oder 0, wenn keine gefunden werden
  return consonants ? consonants.length : 0;
}

console.log(countConsonants("hello")); // 3



// -------------------------------------------- Task14

function sumEvenNumbers(numbers) {
  return numbers
      .filter(number => number % 2 === 0) // Filtert die geraden Zahlen
      .reduce((sum, number) => sum + number, 0); // Summiert die geraden Zahlen
}


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12



// -------------------------------------------- Task15

function countByColor(items) {
  const colorCount = [0, 0, 0];

  items.forEach(item => {
      if (item.toLowerCase().includes("red")) {
          colorCount[0]++; // Zählt rot
      } else if (item.toLowerCase().includes("yellow")) {
          colorCount[1]++; // Zählt gelb
      } else if (item.toLowerCase().includes("green")) {
          colorCount[2]++; // Zählt grün
      }
  });

  return colorCount;
}

console.log(countByColor(["Red pen", "Yellow shirt"])); 
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"])); 
console.log(countByColor(["Pink hair", "Blue sky"])); 
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); 

// -------------------------------------------- Task16

function sumEvenOdd(numbers) {
  let sumEven = 0;
  let sumOdd = 0;

  numbers.forEach(number => {
      if (number % 2 === 0) {
          sumEven += number; 
      } else {
          sumOdd += number; 
      }
  });

  return [sumEven, sumOdd]; 
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));

