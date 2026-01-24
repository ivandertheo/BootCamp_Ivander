const nilai = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

function hitungNilaiSemester(arr) {
  if (arr.length === 0) {
    return {
      totalNilaiSemesterGenap: 0,
      totalNilaiSemesterGanjil: 0,
      rataRataNilaiSemesterGenap: 0,
      rataRataNilaiSemesterGanjil: 0
    };
  }

  const result = arr.reduce(
    (acc, nilai, index) => {
      const semester = index + 1;

      if (semester % 2 === 0) {
        acc.totalGenap += nilai;
        acc.countGenap++;
      } else {
        acc.totalGanjil += nilai;
        acc.countGanjil++;
      }

      return acc;
    },{
      totalGenap: 0, 
      totalGanjil: 0,
      countGenap: 0,
      countGanjil: 0
    }
  );

  return {
    totalNilaiSemesterGenap: result.totalGenap,
    totalNilaiSemesterGanjil: result.totalGanjil,
    rataRataNilaiSemesterGenap:
      result.countGenap === 0 ? 0 : result.totalGenap / result.countGenap,
    rataRataNilaiSemesterGanjil:
      result.countGanjil === 0 ? 0 : result.totalGanjil / result.countGanjil
  };
}

console.log(hitungNilaiSemester(nilai));
