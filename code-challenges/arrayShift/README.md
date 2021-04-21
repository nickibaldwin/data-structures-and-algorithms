# Code Challenge 02 - Array Shift

## Challenge Summary

Create a new array without using built in methods.

## Challenge Description

Write a function called insertShiftArray, which takes in an array and adds an additional value in numerical order. Do not use any built in methods.

## Approach & Efficiency

Honestly, building out the structure took a lot of time, so I didn't get as far as I was hoping. Today I spent time of getting the scaffolding down, and am hoping to get further along in tomorrow's code challenge. But I did spend some time thinking about how to .splice() without using .splice(), and wrote out some ideas in plain english. Then broke it down. 
Efficiency was bad. I didn't get very far before mental burn out. Plus, my VS Code kept replacing files, so that was slowing me down too.

## Solution
```javascript
const insertShiftArray = (array, value) => {
    let arrayNew = [];
    let middle = array.length / 2;
    if (array.length % 2 !== 0) {
        middle += 0.5;
    }
    for (let i = 0; i < array.length; i++) {
        if (i < middle) {
            arrayNew.push(array[i]);
        } else if (i === middle) {
            arrayNew.push(value);
        } else if (i > middle) {
            arrayNew.push(array[i - 1]);
        }
    }
    return arrayNew;
};

module.exports = insertShiftArray;
```

## [Link to Code](code-challenges/arrayShift/arrayShift.js)