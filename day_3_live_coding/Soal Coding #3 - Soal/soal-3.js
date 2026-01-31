/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
}

const average = (arrNum) => {
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
}

const bestStudent = (nama, num) => {
    let temp=0;
    if(num > temp) {
        temp=num;
        return nama;
    } else {
        return "";
    }
}
// end of helper function

const showSummary = (rawData) => {

    // tulis code di sini
    const hasil = rawData.reduce((acc, { kelas, nilai}) => {
    if (!acc[kelas]) {
        acc[kelas] = { kelas, totalSiswa: 0 , sum: [] , rataRata: 0};
    }

    acc[kelas].totalSiswa++;
    acc[kelas].sum.push(nilai);
    acc[kelas].rataRata = roundTwoDecimal(average(acc[kelas].sum));
    return acc;
    }, {});
    console.log(hasil);
    for (const kelas in hasil){
        const data = hasil[kelas];
        console.log(
            `Kelas = ${data.kelas} | Jumlah Siswa = ${data.totalSiswa} | Nilai Rata Rata = ${data.rataRata}`
        )
    }
};

const rawData = [
    {nama: "siswa 1", kelas : 'A', nilai : 90},
    {nama: "siswa 2", kelas : 'B', nilai : 80},
    {nama: "siswa 3", kelas : 'A', nilai : 85},
    {nama: "siswa 4", kelas : 'B', nilai : 85},
    {nama: "siswa 5", kelas : 'B', nilai : 80},
    {nama: "siswa 6", kelas : 'B', nilai : 80},
    {nama: "siswa 7", kelas : 'A', nilai : 85},
    {nama: "siswa 8", kelas : 'C', nilai : 83},
    {nama: "siswa 9", kelas : 'C', nilai : 80},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5
*/