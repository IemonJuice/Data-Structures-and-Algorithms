class Node {
    next = null;
    value = null;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    tail = null;
    size;

    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.size = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
        return this;
    }

    pop() {
        if (this.head === null) {
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;
        while (temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp.value;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }

    shift() {
        const deleteNode = this.head;

        if (this.size === 0) {
            return undefined;
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
        } else {
            this.head = this.head.next;
            deleteNode.next = null;
            this.size--;
        }
        return deleteNode;

    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        if (index < 0 || index > this.size) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        temp = value;
        return temp
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            return undefined;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.size) {
            return this.push(value);
        }
        let newNode = new Node(value);
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
        return newNode;
    }

    remove(index) {
        if (this.size === 0) {
            return undefined;
        } else if (index < 0 || index >= this.size) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.size - 1) {
            return this.pop();
        }
        let prev = this.get(index - 1);
        let next = this.get(index + 1);
        prev.next = next;
        this.size--;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.size; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
    findMiddleNode(){
        if(this.size%2){
            return this.get((this.size)/2+1);
        }
    }
}


