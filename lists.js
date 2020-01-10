class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insertFirst(item) {
    this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    insertBefore(item, key) {
        let currNode = this.head
        
        let previousNode = null;

        if(!this.head) {
            return;
        }

        if(this.head === key) {
            this.insertFirst(item)
        }

        while(currNode.value !== key){
            if(currNode.next === null){
                return null;
            }
            else {
                currNode = currNode.next
                previousNode = currNode
            }
        }
        previousNode.next = new _Node(item, currNode);
    }

    remove(item) {
        if(!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }


}

const SLL = new LinkedList()

function main() {
    SLL.insertFirst("Apollo")
    SLL.insertLast("Boomer")
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")
}

main();

console.log(SLL);