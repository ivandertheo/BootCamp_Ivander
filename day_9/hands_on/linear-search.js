function search(arr, x) {
  const n = arr.length;

  // Iterate over every element in the array
  for (let i = 0; i < n; i++) {
    // Check if current element is equal with our target element
    // TODO: implement this step
    if (arr[i] === x) {
      // If its equal, return current index
      // TODO: implement this step
      return i;
    }
  }

  // If target element not found in the array, return -1 as index
  // TODO: implement this step
  return -1;
}

// Driver Code
// Dont change this part
let arr = [2, 3, 4, 10, 40];
let x = 10;

let result = search(arr, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
