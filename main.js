import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("Test 1");
list.append("Test 2");
list.append("Test 3");
list.append("Test 4");
list.prepend("Test 0");
list.append("Test 5");

list.insertAt("Test 3.5", 4);

console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
