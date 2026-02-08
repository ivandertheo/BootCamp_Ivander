const arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

const linearSearch = (arr, target) => {
    for(let i = 0;i <arr.length;i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}
const binarySearch = (arr, target) => {
    let isFound = false;
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = Math.ceil( (low+high) / 2 );
        if (arr[mid] === target) {
            isFound = true;
            return isFound;
        }
        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return isFound;
}
console.log(linearSearch(arr1, 2)); 
console.log(linearSearch(arr1, 99));
console.log(binarySearch(arr2, 7)); 
console.log(binarySearch(arr2, 21));