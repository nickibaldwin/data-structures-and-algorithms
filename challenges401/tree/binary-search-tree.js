'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(current){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contain(value){
    if(this.root === null) return false;
    var current = this.root,
      found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(){
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while(queue.length){
      node = queue.shift(); //FIFO: shift from beginning to get FIFO
      data.push(node.value); //adding to our list that we're going to return
      if(node.left) queue.push(node.left); //if there's a left, then queue push to the left
      if(node.right) queue.push(node.right); //if there's a right then add it to the queue
    }
    return data;//data variable where we are building up our array
  }

}

module.exports = BinarySearchTree;
