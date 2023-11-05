class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}

//case in which Hash table good

//Task: find if the item of 1 array is in the 2 array;

//Method 1  using the nested Loop

function findSimilarItemInTwoArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++)
            if (arr1[j] == arr2[j]) {
                console.log("Found item");
            }
    }
}
// It's bad because of the O(n^2) algorithm

//use data types which are using hash functions instead

function findSimilarItemInTwoArrays(arr1, arr2){
    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    for (let i = 0; i < arr2.length; i++) {
        if(obj[arr2[i]]){
            return true;
        }
    }
    return false;
}
