'use strict';

class Animal {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Dog extends Animal {
  constructor(data) {
    super('dog');
  }
}

class Cat extends Animal {
  constructor(data) {
    super('cat');
  }
}

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  shelterEnqueue(animal) {
    if (animal.data === 'cat') {
      this.cat.enqueue(animal);
    } else {
      this.dog.enqueue(animal);
    }
  }

  shelterDequeue(pref){
    if (pref === 'cat') {
      return this.cat.dequeue();
    } else if (pref === 'dog') {
      return this.dog.dequeue();
    } else {
      return null;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()){
      throw 'Error: No Animals Available';
    } else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.data;
    }
  }

}

module.exports = { AnimalShelter };
