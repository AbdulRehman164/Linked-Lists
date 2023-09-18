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
}
const list = new LinkedList();
list.append(15);
console.log(list);

list.append(100);
console.log(list);

list.append(120);
console.log(list);

list.prepend(1);
console.log(list);

console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
