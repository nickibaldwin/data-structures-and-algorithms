'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value){
    var newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
      this.last = null; //edgecase
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek(){
    if(!this.first) return 'Exception, empty stack';
    var temp = this.first;
    return temp.value;
  }

  isEmpty(){
    if( this.size === 0) return true;
    return false;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack;
stack.peek();
stack.isEmpty();

module.exports = Stack;
