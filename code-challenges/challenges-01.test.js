'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;

  expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => { // what we are satying is var addOne to the array 1,2,3,4,5
  // Solution code here...
  const result = []; //what we are saying is var result is equal to the empty array
  //work goes here;
  arr.forEach(function(number) { //next we take the array for each number in that function
    result.push(number +1); // like i++, we push the results of the number and add 1
  });
  return result;
// return *what I expect to be returned*
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;

    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => { //declaring the function, addExclamation
  // Solution code here...
  const result = []; //we saying result is equal to the empty array
  //work goes here;
  arr.forEach(function(greetWith){ //now we have the array for each greetWith to pass into the function
    result.push(greetWith +'!'); //then we take the result and push to greetwith and add the exclamation point
  });
  return result;
// return *what I expect to be returned*
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.

    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => { //declare the function allUpperCase
  // Solution code here...
  const result = []; //next we pass info into the empty array
  //work goes here;
  arr.forEach(greetings => { // with the array we then say for each greeting and passing that through a function
    const greetingsUpperCase = greetings.toUpperCase(); //within our function we declare a const to greetingUpperCase and then use the .toUpperCase() method to capitalize the array
    result.push(greetingsUpperCase); //now we push the new greetingsUpperCase into the array
  });
  return result;
// return *what I expect to be returned*
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function. 

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array. 

    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
------------------------------------------------------------------------------------------------ */

const greeting = (word) => { // delcare the function named greeting
  // Solution code here...
  return word.toUpperCase(); //we take the 
  // const result = []; // we have our array
  // word.forEach(greeting =>{ //
  //   const greetingEx = greeting.toUpperCase();
  //   result.push(greetingEx);
  // });
};

const speaker = (words, callback) => { //speaker is equal to words and callback
  // Solution code here...
  const result = [];//results are equal to the empty array
  words.forEach(word => { //forEach words we want to take the word from the function earlier
    result.push(`${callback(word)}!`); //BACK TICKS, now we call the result and push that to the callback of word
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => { //declare the function addValues which is equal to arr and value
  // Solution code here...
  arr.push(value); //pushing value into the array
};

const addNumbers = (num, arr, times, callback) => {
  // Solution code here...
  for (var i = 0; i < times; i++){
    callback(arr, num);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store intentory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.


test('It should only add the available items to the list', () => {
  expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
  expect(createList(inventory).length).toStrictEqual(3);
------------------------------------------------------------------------------------------------ */


const createList = (availableItems) => {//declare the function createList that is taking in the currently available items
  // Solution code here...
  const myList = []; //my list is an empty array
  availableItems.forEach(inventory => { //check my list against the avilable store inventory
    if(inventory.available === true){ //if the inventroy is available
      myList.push(inventory.name);//the we push the items to my list
    }
  });
  return myList;//return whatever strictly equals to be true and add it back to my list
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

// const fizzbuzz = (arr) => {
//   // Solution code here...
// //   const results = [];

// //   arr.forEach(num => {
// //     if(num % 3 === 0){
// //       if(num % 5 === 0){
// //         results.push('Fizz Buzz');
// //       } else {
// //         results.push('Fizz');
// //       }
// //     }else if(num % 5 === 0){
// //       results.push('Buzz');
// //     } else{
// //       results.push(num);
// //     }
// //   });
// //   return results;
// // };
// };

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

xdescribe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

xdescribe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

xdescribe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

xdescribe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

xdescribe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
