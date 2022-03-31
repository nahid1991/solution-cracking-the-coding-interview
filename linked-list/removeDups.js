class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function checkDups(head, node) {
  let currNode = head;
  while (currNode !== node) {
    if (currNode.value === node.value) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
}

// 1 -> 2 -> 1 -> 3 -> 5 -> 1
// Time: O(n^2) and Space: O(1)
function removeDups(head) {
  let node = head;
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
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
removeDups(nodeOne);
console.log(JSON.stringify(nodeOne));
