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

  find(value) {
    if (!this.contains(value)) return null;
    else {
      let tmp = this.head;
      let index = 0;
      while (tmp) {
        if (tmp.data === value) return index;
        tmp = tmp.next;
        index++;
      }
    }
  }

  toString() {
    let str = '';
    let tmp = this.head;
    while (tmp) {
      str += ` ${tmp.data} ->`;
      tmp = tmp.next;
    }
    return str + ' null';
  }

  removeAt(index) {
    if (this.at(index) === null || this.at(index).next === null) this.pop();
    else if (index === 0) this.head = this.head.next;
    else {
      let prev = this.head;
      let next = this.head.next;
      let i = 0;
      while (next) {
        if (index - 1 === i) prev.next = next.next;
        prev = next;
        next = next.next;
        i++;
      }
    }
  }

  insertAt(index, value) {
    if (this.at(index) === null) this.append(value);
    else if (index === 0) this.prepend(value);
    else {
      let tmp = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === index - 1) {
          let tmp2 = tmp.next;
          tmp.next = new Node(value, tmp2);
        }
        tmp = tmp.next;
      }
    }
  }
}
const list = new LinkedList();
list.append(15);
list.append(16);
list.append(17);
list.append(18);
list.append(19);
list.append(10);
console.log(list.toString());
