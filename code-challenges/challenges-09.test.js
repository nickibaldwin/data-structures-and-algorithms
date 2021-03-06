'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.

For example: 
{
  name: 'bob',
  age: 32
}

Becomes: 
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */

function transformToLis(obj){
  // Solution code here...
  const result = [];
  for(let value in obj){
    result.push(`<li>${value}: ${obj[value]}</li>`);
  }
  return result;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.

------------------------------------------------------------------------------------------------ */
// [1,2,3, 4,5 ]
// want to return (15)
const addValues = (arr) => {
  // Solution code here...
  const output = arr.reduce(add, 0);

  // add(1,2) => 3
  // add(3, 3) => 6
  // add(6,4) => 10
  // add(10, 5) => 15;
  return output;
};

function add(numWeAddTo, singleNum){
  return numWeAddTo + singleNum;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addPurchases that, given an array of objects as input, uses reduce to find the total amount purchased. Each object contains the keys `item` and `purchasePrice` like the example.

{
  item: 'switch'
  purchasePrice: 399
}
Yoyu need two parameters for .reduce((acc, value) => ) It's like $1000 in the stock market, after 1 week it may come back positive or negative
------------------------------------------------------------------------------------------------ */

const addPurchases = (arr) => {
  // Solution code here...
  return arr.reduce((acc,value) => {
    acc += value.purchasePrice;
    return acc;
  },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = (arr) => {
  // Solution code here...
  return arr.reduce((acc) => {
    acc ++ ;
    console.log(acc);
    return acc;
  }, 0 );
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

const returnNames = (arr) => {
  // Solution code here...
  return arr.reduce((acc, val) => {
    acc.push(val.name);
    return acc;
  }, []);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

const reversedString = (str) => {
  // Solution code here...
  return str.split('').reduceRight((acc, val) => {
    acc.push(val);
    return acc;
  }, []).join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = (arr) => {
  // Solution code here...
  const outputOfReduce = arr.reduce(reduceToChildrenCount, 0);
  return outputOfReduce;
};
function reduceToChildrenCount(childCount, personObj){
  if(personObj.children){
    return childCount + personObj.children.length;
  } else {
    return childCount;
  }


}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStat = (statName, arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

xdescribe('Testing challenge 1', () => {
  test('It should return a list of key value pairs inside of li tags', () => {
    expect(transformToLis({name: 'bob', age: 32})[0]).toStrictEqual(`<li>name: bob</li>`);
    expect(transformToLis({name: 'bob', age: 32})[1]).toStrictEqual(`<li>age: 32</li>`);
    expect(transformToLis({})).toStrictEqual([]);
  });
});

xdescribe('Testing challenge 2', () => {
  test('It should add the values of an array', () => {
    expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(addValues([])).toStrictEqual(0);
    expect(addValues([1, 2, 3, 4, -5])).toStrictEqual(5);
  });
});

xdescribe('Testing challenge 3', () => {
  test('It should add the purchase price', () => {
    expect(addPurchases([{item: 'switch', purchasePrice: 399}, {item: 'toothpaste', purchasePrice: 2}])).toStrictEqual(401);
    expect(addPurchases([])).toStrictEqual(0);
  });
});

xdescribe('Testing challenge 4', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

xdescribe('Testing challenge 6', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

xdescribe('Testing challenge 11', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});
