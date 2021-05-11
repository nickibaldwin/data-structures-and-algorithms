'use strict';

let BinarySearchTree = require('../binary-search-tree.js');
let BinaryTree = require('../tree.js');
let Node = require('../node.js');

describe('======== TREE TESTS ========', () => {
//============DAY 1 TESTS==============
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree(new Node(10));
    expect(tree.root.value).toEqual(10);
    expect(tree.contain(10)).toEqual(true);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.right = new Node(6);
    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(7);
    expect(tree.root.right.value).toEqual(5);
    expect(tree.root.left.right.value).toEqual(6);
  });

  //================= DAY 2 TESTS ====================
  it('Can successfully find the maximum value in the BT', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.left.left = new Node(2);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    console.log(tree);
    expect(tree.findMaximumValue()).toEqual(11);
  });

  //================= DAY 3 TESTS ====================
  it('Can traverse the BST using BFS', () => {
    var tree = new BinarySearchTree();
    tree.add(10);
    tree.add(6);
    tree.add(15);
    tree.add(3);
    tree.add(8);
    tree.add(20);
    tree.BFS();
  });

});
