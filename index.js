class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  append(value) {
    const node = new Node(value);
    if (Object.keys(this).length === 0) this.head = node;
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
