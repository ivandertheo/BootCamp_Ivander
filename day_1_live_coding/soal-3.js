/**
 * Penjumlahan
 * 
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 * 
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * if( input.match(/^\d+$/) ) { ... }
 */

const prompt = require('prompt-sync')();

const input = prompt;
let total = 0;
while(input!=="=") {
    const input = prompt('input ? ');
    if(input==="=") {
        break;
    } else if(input.match(/^\d+$/)) {
        total+= Number(input);
    }
}

console.log('jumlah = ' + total); // ini diganti dengan jumlah seluruh inputnya