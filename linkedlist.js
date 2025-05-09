// linkedList.js

import { Node } from "./nodeClass.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // LinkedList methods
  append(value) {
    const lastNode = new Node(value);
    if (!this.head) {
      this.head = lastNode;
      this.size += 1; // increase size of list by 1
      return;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = lastNode;
    this.size += 1;
  }

  prepend(value) {
    const firstNode = new Node(value);
    if (!this.head) {
      this.head = firstNode;
      this.size += 1;
      return;
    } else {
      let current = this.head;
      this.head = firstNode;
      firstNode.nextNode = current;
      this.size += 1;
    }
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index >= this.size) {
      throw new Error(`There is no value at index ${index}`);
    }
    if (index === 0) {
      return this.head.value;
    } else {
      let current = this.head;
      while (index > 0) {
        current = current.nextNode;
        index -= 1;
      }
      return current.value;
    }
  }

  pop() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let previous;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null; // point second to last node to null
    this.size -= 1; // decrease size of list by 1
  }

  contains(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.nextNode;
    }
    return false;
  }

  toString() {
    let string = "";
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return (string += "null");
  }

  insertAt(value, index) {
    if (index > this.size) {
      throw new Error("Index is outside the range of the linked list.");
    }
    const insertNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    let next = current.nextNode;
    current.nextNode = insertNode;
    insertNode.nextNode = next;
    this.size += 1;
  }
  // that inserts a new node with the provided value at the given index.
  removeAt(index) {
    if (index > this.size) {
      throw new Error("Index is outside the range of the linked list.");
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    let removedNode = current.nextNode;
    let targetNode = removedNode.nextNode;
    current.nextNode = targetNode;
    this.size -= 1;
  }
}
