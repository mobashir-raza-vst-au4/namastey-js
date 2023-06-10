class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(data) {
        const newNode = {
            value: data,
            next: this.head
        }

        this.head = newNode;
        this.length++;
    }

    traverse(required) {
        let count = 0;
        let currentNode = this.head;

        while(count != required) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        
        if (this.length < index) {
            return;
        }
        const leaderNode = this.traverse(index - 1)
        const nextNode = leaderNode.next;

        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++;

        if (this.length - 1 == index) {
            this.tail = this.tail.next
        }
    }
}

const list = new LinkedList(10);
list.append(16)
list.prepend(2)
list.insert(1, 4)
list.insert(4, 34)
console.log(JSON.stringify(list))