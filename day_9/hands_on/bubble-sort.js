function bubbleSort(arr, n) {
  // Declare variable for looping
  let i, j, temp;

  // Iterate from the first item of array till the last
  // TODO: implement outer looping
  for (i=0; i < n-1; i++) {
    // Inner looping, for comparing current element with every element
    // TODO: implement inner looping
    for (j=0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // Swap arr[j] and arr[j+1]
        // TODO: implement swapping logic
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

// Function to print an array
// Dont change this part
function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
}

// Driver program
// Dont change this part
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
console.log(`sorted array (built-in): ${arr.sort((a, b) => a - b)}`);
