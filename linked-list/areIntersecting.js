class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n) and Space: O(1) where n is the length of the longest linked list.
function areIntersecting(linkedListOne, linkedListTwo) {
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  let lengthOfNodeOne = 1;
  let lengthOfNodeTwo = 1;
  while(nodeOne.next !== null) {
    nodeOne = nodeOne.next;
    lengthOfNodeOne++;
  }
  while(nodeTwo.next !== null) {
    nodeTwo = nodeTwo.next;
    lengthOfNodeTwo++;
  }
  if(nodeOne.value !== nodeTwo.value) return null;
  nodeOne = linkedListOne;
  nodeTwo = linkedListTwo;
  const isNodeOneLonger = lengthOfNodeOne > lengthOfNodeTwo;
  if(isNodeOneLonger) {
    while(lengthOfNodeOne !== lengthOfNodeTwo) {
      nodeOne = nodeOne.next;
      lengthOfNodeOne--;
    }
  } else {
    while(lengthOfNodeTwo !== lengthOfNodeOne) {
      nodeTwo = nodeTwo.next;
      lengthOfNodeTwo--;
    }
  }

  while(nodeOne !== null && nodeTwo !== null) {
    if(nodeOne.value === nodeTwo.value) {
      return nodeOne;
    }
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
  }
  return null;
}

let a = new LinkedList('a');
let b = new LinkedList('b');
let c = new LinkedList('c');
let d = new LinkedList('d');
let e = new LinkedList('e');
let f = new LinkedList('f');
let g = new LinkedList('g');
let h = new LinkedList('h');
let i = new LinkedList('i');
let j = new LinkedList('j');

i.next = j;
h.next = i;
g.next = h;
let commonLinkedList = i;
a.next = b;
b.next = c;
c.next = d;
d.next = commonLinkedList;
let linkedListOne = a;
e.next = f;
f.next = commonLinkedList;
let linkedListTwo = e;
console.log(areIntersecting(linkedListOne, linkedListTwo));
