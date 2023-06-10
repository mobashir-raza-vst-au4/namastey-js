//2->10->16
//    \ /
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

    delete(index) {
        if (this.length <= index || !index) {
            return;
        }
        const leaderNode = this.traverse(index - 1);
        const unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        this.length--;

        if (this.length == index) {
            this.tail = leaderNode;
        }
    }
}

const list = new LinkedList(10);
list.append(16)
list.prepend(2)
// list.delete(1)
list.append(200)
list.delete(3)

console.log(JSON.stringify(list))