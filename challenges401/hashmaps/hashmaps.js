class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    }else {
      node.next = this,head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

class Hashmap {
  //Hashmaps need:
  // - a predetermined storage mechanism -> array
  //which means we also need some thype of storage mechanism
  //a constructor that creates a new storage mechanism when we make a new hashmap
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0), 19 % this.size;
  }

  set(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    }
  }

  get(key) {
    //TO DO get the item via a key 
  }
}

let hashmap = new Hashmap(4000);

hashmap.set('brian', 'nations');
hashmap.set('nicki', 'baldwin');
hashmap.set('mackie', 'mac');
hashmap.set('nicole', 'kitty');

console.log(hashmap);
