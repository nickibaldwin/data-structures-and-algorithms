'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.insert(10);

console.log('single item', ll);

ll.insert(20);

console.log('2 items', ll);
console.log(ll.tail);
console.log('in index', ll.toString());
