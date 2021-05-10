'use strict';

const BinarySearchTree = require('../binary-search-tree.js')

describe('======== TREES DAY 1 TESTS ========', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    expect(tree.root).toEqual(10);
    expect(tree.contain(10)).toEqual(true);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(3);
    tree.add(20);
    tree.add(15);
    tree.add(13);
    tree.add(6);
    tree.add(8);
    expect(tree.root).toEqual(10);
    expect(tree.root.left.value).toEqual(6);
    expect(tree.root.right.value).toEqual(15);
  });

});
