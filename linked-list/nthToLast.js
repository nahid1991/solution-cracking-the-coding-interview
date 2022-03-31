class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 1 -> 2 -> 1 -> 3 -> 5 -> 1
// Time: O(n) and space: O(1)
function nthToLast(head, k) {
  let p1 = head;
  let p2 = head;
  for(let i = 0; i < k; i++) {
    if(p1 === null) return null;
    p1 = p1.next;
  }

  while(p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

let nodeOne = new LinkedListNode(1);
let nodeTwo = new LinkedListNode(2);
let nodeThree = new LinkedListNode(1);
let nodeFour = new LinkedListNode(3);
let nodeFive = new LinkedListNode(5);
let nodeSix = new LinkedListNode(1);
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;
nodeSix.next = null;
console.log(nthToLast(nodeOne, 3));
