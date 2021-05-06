'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor(){
    this.size = 0;
    this.first = this.last = null;
  }

  enqueue(value){
    var newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else{
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return 'Exception, empty queue';
    var temp = this.first;
    // if there is only one node
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//     this.next = null;
//   }

//   enqueue(value){
//     var newNode = new Node(value);
//     if(!this.first){
//       this.first = newNode;
//       this.last = newNode;
//     } else{
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }

//   dequeue(){
//     if(!this.first) return 'Exception, empty queue';
//     var temp = this.first;
//     // if there is only one node
//     if(this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }

//   peek(){
//     if(!this.first) return 'Exception, empty queue';
//     var temp = this.first;
//     return temp.value;
//   }

//   isEmpty(){
//     if( this.size === 0) return true;
//     return false;
//   }
// }

// module.exports = Queue;
