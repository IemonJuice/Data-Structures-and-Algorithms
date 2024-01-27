function getDigit(num:number,place:number){
    return   Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num:number) {
    if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums:number[]) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums:number[]) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
