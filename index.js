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
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = node;
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
