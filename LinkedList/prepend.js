class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }

        this.tail = this.head;
        this.length = 1
    }

    append(data) {
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(data) {
        let newNode = {
            value: data,
            next: this.head
        }
        this.head = newNode
        this.length++;
    }
}

const list = new LinkedList(10)
list.append(16)
list.append(20)
list.prepend(2)
list.append(40)

console.log(JSON.stringify(list))