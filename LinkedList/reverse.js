class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //10->16
  append(data) {
    let newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  //   10->16-20
  prepend(data) {
    let newNode = {
      value: data,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  //   2->10->16-20
  //   20->16->10->2
  reverse() {
    let firstNode = this.head; //2
    this.tail = this.head;
    let secondNode = firstNode.next; //10

    while (secondNode) {
        console.log("2nd..",secondNode)
      let temp = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }

    this.head.next = null;
    this.head = firstNode;
  }
}

let list = new LinkedList(10);
list.append(16);
list.append(20);
list.prepend(2);
list.reverse();
console.log(JSON.stringify(list));
