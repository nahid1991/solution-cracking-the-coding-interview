class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n) and Space: O(1) where n is the length of the longest linked list;
function sumLists(linkedListOne, linkedListTwo) {
  let resultingLinkedList = new LinkedList(0);
  let currentNode = resultingLinkedList;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;

  while(nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const nodeOneValue = nodeOne === null ? 0 : nodeOne.value;
    const nodeTwoValue = nodeTwo === null ? 0 : nodeTwo.value;
    const newSum = nodeOneValue + nodeTwoValue + carry;
    const newValue = newSum % 10;
    carry = Math.floor(newSum / 10);

    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    currentNode.next = new LinkedList(newValue);
    currentNode = currentNode.next;
  }

  return resultingLinkedList.next;
}

let linkedListOne = new LinkedList(7);
let runner = linkedListOne;
runner.next = new LinkedList(1);
runner = runner.next;
runner.next = new LinkedList(6);
runner = runner.next;

let linkedListTwo = new LinkedList(5);
runner = linkedListTwo;
runner.next = new LinkedList(9);
runner = runner.next;
runner.next = new LinkedList(2);
runner = runner.next;

// 617 + 295 = 912
console.log(sumLists(linkedListOne, linkedListTwo));
