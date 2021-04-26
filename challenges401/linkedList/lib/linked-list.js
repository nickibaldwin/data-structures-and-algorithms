'use strict';

const Node = require('./node.js');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; //UD
    this.length = 0; //UD
  }

  insert(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  includes(value) {
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      while (newNode.length != value)
      newNode++, newNode = newNode.next()
      if newNode = null;
        return null;
    }
    return this;
  }
  append(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      // traversal happens here
      let current = this.head; // start the traversal at the beginning (head) of the LL

      while(current.next) { // this is the actual traversal
        current = current.next; // this moves you along in your traversal
      }

      current.next = node;
    }

    return this;
  }
}
const list = new SinglyLinkedList();


module.exports = SinglyLinkedList;
