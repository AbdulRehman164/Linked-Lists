class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      this.getTail().next = node;
    }
  }

  prepend(value) {
    if (this.head === null) this.head = new Node(value);
    else {
      const tmp = { ...this.head };
      this.head = new Node(value, tmp);
    }
  }

  size(tmp = this.head) {
    // if the list if passed as an argument it does not return wrong result
    if (tmp === this) tmp = tmp.head;
    if (tmp === null) return 0;
    return 1 + this.size(tmp.next);
  }
  getHead() {
    return this.head;
  }

  getTail(tmp = this.head) {
    if (!tmp || tmp.next === null) return tmp;
    else {
      return this.getTail(tmp.next);
    }
  }

  at(index) {
    let tmp = this.head; // this is the 0th index
    for (let i = 1; i <= index; i++) {
      if (tmp) tmp = tmp.next;
    }
    return tmp;
  }

  pop(tmp = this.head) {
    if (tmp && tmp.next.next === null) tmp.next = null;
    else {
      tmp ? this.pop(tmp.next) : null;
    }
  }

  contains(value, tmp = this.head) {
    if (!tmp) return false;
    if (value === tmp.data) return true;
    else {
      return this.contains(value, tmp.next);
    }
  }
}
const list = new LinkedList();
list.append(15);
list.append(100);
