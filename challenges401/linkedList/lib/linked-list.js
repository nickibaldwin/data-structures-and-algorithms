'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; //newNode is now this.head
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  includes(value) {
    let current = this.head;
    if(!this.head) return false;
    while(current) {
      if(current.value === value){
        return true;
      }
      if(current !== current.next){
        current = current.next;
      }else {
        current =null;
      }
    }
    return false;
  }

  toString() {
    let output = '';
    let current = this.head;
    if(!this.head) return output;
    while(current) {
      output += `{ ${current.value} } -> `;
      current = current.next;
    }
    return output += 'NULL';
  }

  append(value) {
    let current = this.head;
    while(current.next) {
      current = current.next;
    } 
    let newNode = new Node(value);
    current.next = newNode;
  }

  
}



let newSinglyLinkedList = new SinglyLinkedList();
newSinglyLinkedList.insert(5);
newSinglyLinkedList.insert(10);
newSinglyLinkedList.insert(15);

module.exports = SinglyLinkedList;
