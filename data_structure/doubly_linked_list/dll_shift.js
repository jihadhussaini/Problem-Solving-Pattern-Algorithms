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
    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode 
        }
        this.length++;
        return this
    }
    shift(){
        let oldHead = this.head;
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null; 
        }
        this.length--;
        return oldHead;
    }
}

// test 
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5
 
doublyLinkedList.shift().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.shift().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.shift().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
