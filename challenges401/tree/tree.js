'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //DFS depth first search traversal methods (recursive)
  //d=data, l=left, r=right

  preOrder() { //DLR
    let results = [];

    let _walk = node => {
      results.push(node.value); //executing code
      if(node.left) _walk(node.left); //go left - if node,left is null, we are at a leaf - traversing
      if(node.right) _walk(node.right); // go right - if node.right=null then we are at a leaf - traversing
    };
    console.log(_walk(this.root));
    _walk(this.root);
    return results;
  }

  inOrder() { //LDR
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left); //go left - if node,left is null, we are at a leaf
      results.push(node.value);
      if(node.right) _walk(node.right); // go right - if node.right=null then we are at a leaf
    };
    _walk(this.root);
    return results;
  }

  postOrder() { //LRD
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left); //go left - if node,left is null, we are at a leaf
      if(node.right) _walk(node.right); // go right - if node.right=null then we are at a leaf
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    let arr = this.preOrder();
    let getMax = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > getMax){
        getMax = arr[i];
      }
    }
    return getMax;
  }

}

module.exports = BinaryTree;

