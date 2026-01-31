/**
 * Menggabungkan array
 */

let array2d = [[1,2,3],[4,5,6],[7,8,9]];

// tulis code di sini
const newArr = [];
for (const item of array2d) {
    newArr.push(...item);
}

console.log(newArr); // output: [1,2,3,4,5,6,7,8,9]
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)