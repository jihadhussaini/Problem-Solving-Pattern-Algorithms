class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

// test 
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5); // doublyLinkedList
console.log(doublyLinkedList)
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.head.val)
console.log(doublyLinkedList.tail.val)
console.log(doublyLinkedList.head.prev)
doublyLinkedList.push(10); //doublyLinkedList 
console.log(doublyLinkedList)
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.head.val)
console.log(doublyLinkedList.head.next.val)
console.log(doublyLinkedList.tail.val)
console.log(doublyLinkedList.head.next.prev.val)
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 5
// doublyLinkedList.head.next.val; // 10
// doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val // 10