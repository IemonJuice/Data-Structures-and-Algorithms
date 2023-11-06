function InsertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        let j;
        temp = arr[i];
        for (j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}
