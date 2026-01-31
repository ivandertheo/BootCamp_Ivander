/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini
let newSiswa = {
  ...siswa,
  umur: 23,
  pekerjaan: 'programmer'
};



// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
let { pekerjaan, ...sisanya } = newSiswa;

console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }

let { ["nama"] :yyy} = newSiswa;
console.log("ini yyy: ", yyy);