class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) {
                return undefined;
            }
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this;
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contain(value) {
        if (this.root === null) {
            return false;
        }
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false;
    }

    findMin() {
        if (this.root === null) {
            return undefined;
        }
        let temp = this.root;
        while (temp) {
            if (temp.left !== null) {
                temp = temp.left;
            } else {
                return temp;
            }
        }
    }
    findMax() {
        if (this.root === null) {
            return undefined;
        }
        let temp = this.root;
        while (temp !== null) {
            if (temp.right !==null) {
                temp = temp.right;
            }
            else {
                return temp;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(4);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(20);

console.log(tree.findMin());
console.log(tree.findMax());