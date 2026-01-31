/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {
  // tulis code di sini
  let clone=[...arr];//clone agar array asli tidak berubah
  let actualRotation = num%clone.length;
  for(let i=0;i<actualRotation;i++) {
    let last = clone.pop(); //ambil belakang
    clone.unshift(last); //taro depan array
  }
  return clone;
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-1000000000000 : ', rotate(angka, 1000000000000)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)
console.log('array : ', angka); // [3,4,5,6,7,8]