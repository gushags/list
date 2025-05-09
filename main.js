import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.prepend("Test 0");
list.append("Test 1");
list.append("Test 2");
list.append("Test 3");
list.append("Test 4");
list.append("Test 5");
console.log(list);
const first = list.getHead();
console.log(first);
console.log(list.getSize());
console.log("This is the tail: " + list.getTail());
console.log("Index 1: " + list.at(1));
console.log("Index 3: " + list.at(3));
console.log(list.contains("Test 5"));
console.log(list.find("Test 5"));
console.log(list.contains("Nothing"));
console.log(list.toString());
