class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Singlylinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // ko hieu thi coi lai bookmark nhe'
      this.tail = newNode;
    } 
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    let newHead = current.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let temp = this.get(index);
    let priv = this.get(index - 1);
    priv.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let remove = this.get(index);
    let priv = this.get(index - 1);
    priv.next = remove.next;
    this.length--;
    return remove;
  }
  // 1 3 4 2

  reverse() {
    // swap head and tail
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let list = new Singlylinklist();
list.push(1);
list.push(3);
list.push(5);
list.push(0);
list.push(9);
