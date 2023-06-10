// 10->16->-20

// linkedlist {
//     head: {
//         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// }
class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
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
}

const list = new LinkedList(10);
list.append(16);
// list.append(20);
console.log(list)