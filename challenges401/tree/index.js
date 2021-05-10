'use strict';

const BinaryTree = require('./tree.js');
const BinarySearchTree = require('./binary-search-tree.js');
const Node = require('./node.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.left = two; //root node - all things cascade off of this (one)
one.right = three;//this is our initial root node's right now
three.left = four;
five.right = five;

let tree = new BinaryTree(one);

console.log('my binary tree', tree);


//----------------BST---------------------

let sortedTree = new BinarySearchTree();
sortedTree.add(10);
sortedTree.add(3);
sortedTree.add(20);
sortedTree.add(15);
sortedTree.add(13);
sortedTree.add(6);
sortedTree.add(8);

console.log(sortedTree);
console.log('This should return true', sortedTree.contains(10));
console.log('This should return false', sortedTree.contains(11));
sortedTree.add(11);
console.log(sortedTree);
console.log('This should return true', sortedTree.contains(11));
console.log('This should return true', sortedTree.contains(3));
console.log('This should return true', sortedTree.contains(20));
console.log('This should return true', sortedTree.contains(15));
console.log('This should return true', sortedTree.contains(13));
console.log('This should return true', sortedTree.contains(6));
console.log('This should return true', sortedTree.contains(8));
