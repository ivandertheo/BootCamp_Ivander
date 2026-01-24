/*
dataSiswa = [
    {nama: "siswa-1", sekolah: "A"},
    {nama: "siswa-2", sekolah: "A"},
    {nama: "siswa-3", sekolah: "A"},
    {nama: "siswa-4", sekolah: "A"},

    {nama: "siswa-1", sekolah: "B"},
    {nama: "siswa-2", sekolah: "B"},
    
    {nama: "siswa-1", sekolah: "C"},
    {nama: "siswa-2", sekolah: "C"},
    {nama: "siswa-3", sekolah: "C"},
]

{'A': 4, 'B': 2, 'C': 3}


1. sekolah A memiliki 4 siswa
2. sekolah B memiliki 2 siswa
3. sekolah C memiliki 3 siswa

*/

let students = [
    {nama: "siswa-1", sekolah: "A"},
    {nama: "siswa-2", sekolah: "A"},
    {nama: "siswa-3", sekolah: "A"},
    {nama: "siswa-4", sekolah: "A"},

    {nama: "siswa-1", sekolah: "B"},
    {nama: "siswa-2", sekolah: "B"},
    
    {nama: "siswa-1", sekolah: "C"},
    {nama: "siswa-2", sekolah: "C"},
    {nama: "siswa-3", sekolah: "C"},

    {nama: "siswa-1", sekolah: "D"},
]

// inisialisasi variable
let result = {};

// for (let i = 0; i < students.length; i++) {
//     result[students[i].sekolah] = 0;
// }

console.log(result);

// proses datanya
for (let i = 0; i < students.length; i++) {
    let sekolah = students[i].sekolah; // ex: 'A'
    
    // cek di variable result, apakah key sekolah ada? kalau ada, tambahkan nilainya, kalau tidak ada, berikan nilai 1
    result[sekolah] = result[sekolah] == undefined ? 1 : (result[sekolah] + 1);
}

console.log(result)

let i = 1;
for (const keySekolah in result) {
    console.log(`${i}. Sekolah ${keySekolah} memiliki ${result[keySekolah]} siswa`);
    i++;
}