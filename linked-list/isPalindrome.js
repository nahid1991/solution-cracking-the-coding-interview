class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n) and Space: O(1) where n is the length of the linked list.
function isPalindrome(linkedList) {
  const stack = [];
  let slow = linkedList;
  let fast = linkedList;

  while(fast !== null && fast.next !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if(fast !== null) {
    slow = slow.next;
  }

  while(slow !== null) {
    const top = stack.pop();
    if(top !== slow.value) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}

let linkedListOne = new LinkedList(0);
let runner = linkedListOne;
runner.next = new LinkedList(1);
runner = runner.next;
runner.next = new LinkedList(2);
runner = runner.next;
runner.next = new LinkedList(3);
runner = runner.next;
runner.next = new LinkedList(2);
runner = runner.next;
runner.next = new LinkedList(1);
runner = runner.next;
runner.next = new LinkedList(0);
runner = runner.next;
console.log(isPalindrome(linkedListOne));


let linkedListTwo = new LinkedList(0);
runner = linkedListTwo;
runner.next = new LinkedList(1);
runner = runner.next;
runner.next = new LinkedList(2);
runner = runner.next;
runner.next = new LinkedList(3);
runner = runner.next;
runner.next = new LinkedList(1);
runner = runner.next;
runner.next = new LinkedList(0);
runner = runner.next;
console.log(isPalindrome(linkedListTwo));
