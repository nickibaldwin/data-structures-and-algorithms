# Code Challenge Class 12 - Fifo Animal Shelter

### [Solution Code](challenges401/fifoAnimalShelter/fifo-animal-shelter.js)

### [PR in Github](https://github.com/nickibaldwin/data-structures-and-algorithms/pull/27)

<!-- ## Setup

Install proper dependencies:

  `npm i jest`

Test Application:

  `npm run test queue-with-stacks.test.js` -->


## Challenge Summary

First-in, First out Animal Shelter.

## Challenge Description

- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

- Implement the following methods:
  
    - `enqueue(animal)`: adds `animal` to the shelter. animal can be either a dog or a cat object.

    - `dequeue(pref)`: returns either a dog or a cat. If `pref` is not `"dog"` or `"cat"` then return null.

<!-- ## Example

`enqueue(value)`

INPUT | ARGS | OUTPUT
-----|-----|-------
[10]->[15]->[20] | 5 | [5]->[10]->[15]->[20]
(EMPTY) | 5 | [5]

`dequeue()`
INPUT | ARGS | OUTPUT
-----|-----|-------
[5]->[10]->[15]->[20] | 20 | [5]->[10]->[15])
[5]->[10]->[15] | 15 | 	[5]->[10] -->

<!-- ## Test

### `npm run test queue-with-stacks.test.js` -->
  
## Approach & Efficiency

![](./img/2021-05-03-15-00-00.png)

### References:

- [kevinwin.com](https://kevinwin.com/blog/Create-a-queue-like-animal-shelter-in-JavaScript/)

- [Udemy Master Class - Javascript Algorithms and Data Structures](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344200#overview)
