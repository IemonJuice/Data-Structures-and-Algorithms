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
            if (temp.right !== null) {
                temp = temp.right;
            } else {
                return temp;
            }
        }
    }

    BreadthFirstSearch() {
        let currentNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return results;
    }

    DeathFirstSearchPreOrder() {
        let results = [];

        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) {
                traverse(currentNode.left);
            }
            if (currentNode.right) {
                traverse(currentNode.right);
            }
        }

        traverse(this.root);
        return results;
    }

    DeathFirstSearchInOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) {
                traverse(currentNode.left);
            }
            results.push(currentNode.value);
            if (currentNode.right) {
                traverse(currentNode.right);
            }
        }

        traverse(this.root);
        return results;
    }

    DeathFirstSearchPostOrder() {
        let results = [];

        function traverse(currentNode) {
            if (currentNode.left) {
                traverse(currentNode.left);
            }
            if (currentNode.right) {
                traverse(currentNode.right);
            }
            results.push(currentNode.value);
        }

        traverse(this.root);
        return results;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(14)
tree.insert(19)


console.log(tree.DeathFirstSearchPreOrder());
console.log(tree.DeathFirstSearchPostOrder());
console.log(tree.DeathFirstSearchInOrder());
