class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n) and Space: O(1) where n is the length of the linked list
function partitionList(node, x) {
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;
  while(node !== null) {
    const next = node.next;
    node.next = null;
    if(node.value < x) {
      if(beforeStart === null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if(afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }

  if(beforeStart === null) return afterStart;

  beforeStart.next = afterStart;

  return beforeStart;
}

let nodeOne = new LinkedListNode(3);
let nodeTwo = new LinkedListNode(5);
let nodeThree = new LinkedListNode(8);
let nodeFour = new LinkedListNode(5);
let nodeFive = new LinkedListNode(10);
let nodeSix = new LinkedListNode(2);
let nodeSeven = new LinkedListNode(1);
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;
nodeSix.next = nodeSeven;
partitionList(nodeOne, 5);
console.log(JSON.stringify(nodeOne));
