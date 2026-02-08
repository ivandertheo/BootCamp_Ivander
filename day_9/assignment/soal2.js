const bubbleSort = (arr) => {
    for(let i = 0;i < arr.length;i++) {
        for(let j = 0;j < arr.length - i - 1;j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
  return arr;
}
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    }
    return arr;
}

const arrBubble = [7, 2, 9, 4, 1];
const arrSelection =  [10, 4, 6, 2, 8];
const arrInsertion =  [5, 3, 8, 6, 2];

console.log("Bubble Sort:", bubbleSort(arrBubble));
console.log("Selection Sort:", selectionSort(arrSelection));
console.log("Insertion Sort:", insertionSort(arrInsertion));

