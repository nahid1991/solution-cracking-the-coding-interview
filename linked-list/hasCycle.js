class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(n) and Space: O(1)
function hasCycle(linkedList) {
  let slow = linkedList.next;
  let fast = linkedList.next.next;
  while(slow.value !== fast.value) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow);
  console.log(fast);
  slow = linkedList;
  while(slow.value !== fast.value) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
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

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = g;

console.log(hasCycle(a));
