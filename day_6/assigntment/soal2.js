function pemisah(...angka) {
  const arrayBilanganGenap = [];
  const arrayBilanganGanjil = [];

  angka.map(angka => {
    angka % 2 === 0
      ? arrayBilanganGenap.push(angka)
      : arrayBilanganGanjil.push(angka);
  });

  return {
    arrayBilanganGenap,
    arrayBilanganGanjil
  };
}
const hasil = pemisah(1,2,3,4,5,6,7,8,9,10,11,12);
console.log(hasil);
