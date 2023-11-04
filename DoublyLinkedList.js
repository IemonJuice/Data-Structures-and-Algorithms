class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.size = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        let lastItem = this.tail;
        if (this.size === 0) {
            return undefined;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            lastItem.prev = null;
        }
        this.size--;
        return lastItem;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size++;
            return this;
        }
    }

    shift() {
        let shiftedNode = this.head;
        if (this.size === 0) {
            return undefined;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
            this.size--;
        }
        return shiftedNode;
    }

    get(index) {
        if (index < 0 || index > this.size) {
            return undefined;
        }
        if (index < this.size / 2) {
            let temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        } else {
            let temp = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                temp = temp.prev;
            }
            return temp;

        }
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index > this.size || index < 0) {
            return undefined;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.size - 1) {
            return this.push(value);
        }
        let newNode = new Node(value);
        let before = this.get(index - 1);
        let after = this.get(index + 1);
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return undefined;
        }
        if (index === 0) {
          return   this.shift();
        }
        if (index === this.size - 1) {
            this.pop();
        }
        else{
            let current = this.get(index);
            current.prev.next = current.next;
            current.next.prev = current.prev;
            current.prev = null;
            current.next = null;
            this.size--;
            return current;
        }
    }
}


