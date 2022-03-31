class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time: O(1) and Space: O(1)
function deleteMiddleNode(head, letter) {
  let node = head;
  while(node !== null) {
    if(node.value === letter) {
      node.value = node.next.value;
      node.next = node.next.next;
    }

    node = node.next;
  }
}

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');
let d = new LinkedListNode('d');
let e = new LinkedListNode('e');
let f = new LinkedListNode('f');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = null;
console.log('before', JSON.stringify(a));
deleteMiddleNode(a, 'c');
console.log('after', JSON.stringify(a));
