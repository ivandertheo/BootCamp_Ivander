function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    // Search for array's middle point
    // TODO: implement this step

    // If the element is present at the middle
    // return itself
    mid = Math.ceil( (low+high) / 2 );
    if (arr[mid] === x) {
      // TODO: implement the check and return logic
      return mid;
    }

    if (arr[mid] > x) {
      // If element is smaller than mid, then
      // it can only be present in left subarray
      // TODO: implement the check and return logic
      high = mid - 1;
    } else {
      // Else the element can only be present
      // in right subarray
      // TODO: implement the check and return logic
      low = mid + 1;
    }
  }

  // We reach here when element is not
  // present in array
  // TODO: implement not found logic
  return -1;
}

// Driver Code
arr = new Array(2, 3, 4, 10, 40);
x = 10;
result = binarySearch(arr, x);
if (result == -1) console.log("Element is not present in array");
else console.log("Element is present at index " + result);
const find = arr.find((e) => e === x);
if (find === undefined) console.log("Element is not present in array (built-in)");
else console.log(`Element is present in array (built-in): ${find}`);
const indexOf = arr.indexOf(x);
if (indexOf === -1) console.log("Element is not present in array (built-in)");
else console.log("Element is present at index (built-in) " + indexOf);
const includes = arr.includes(x);
if (!includes) console.log("Element is not present in array (built-in)");
else console.log("Element is present in array (built-in): " + includes);
const filter = arr.filter((e) => e === x);
if (filter.length === 0) console.log("Element is not present in array (built-in)");
else console.log("Element is present in array (built-in): " + filter);
