class Node{
    constructor(value){
        this.value = value;
        this.next = null

    }
}

class Stack{

    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    pop(){
        if(this.length === 1){
            this.top = null;
        }
        if(this.length === 0){
            return undefined;
        }
        const poppedItem = this.top;
        this.top = this.top.next
        poppedItem.next = null;
        this.length--;
        return poppedItem;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length ===0){
            this.top = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this

    }
}
