class Orang {
    constructor(nama, umur, pekerjaan) {
        this.nama = nama;
        this.umur = umur;
        this.pekerjaan = pekerjaan;
    }
}

class LakiLaki extends Orang {
    #tinggiBadan;
    constructor(orang, tinggiBadan,) {
        super(orang.nama, orang.umur, orang.pekerjaan);
        this.#tinggiBadan = tinggiBadan;
    }
    constrctor(nama,umur,pekerjaan, tinggiBadan) {
        super(nama, umur, pekerjaan);
        this.#tinggiBadan = tinggiBadan;
    }
    getTB() {
        return this.#tinggiBadan;
    }
    getBBI() {
        return (this.#tinggiBadan - 100) - ((this.#tinggiBadan - 100) * 0.1);
    }
}

class Perempuan extends Orang {
    #tinggiBadan;
    constructor(orang, tinggiBadan) {
        super(orang.nama, orang.umur, orang.pekerjaan);
        this.#tinggiBadan = tinggiBadan;
    }
    constrctor(nama,umur,pekerjaan, tinggiBadan) {
        super(nama, umur, pekerjaan);
        this.#tinggiBadan = tinggiBadan;
    }
    getTB() {
        return this.#tinggiBadan;
    }
    getBBI() {
        return (this.#tinggiBadan - 100) - ((this.#tinggiBadan - 100) * 0.15);
    }
}
const orang = new Orang("Andi", 25, "Pelajar");
const laki = new LakiLaki(orang, 175);
const laki2 = new LakiLaki("Budi", 30, "Karyawan", 180);
console.log("Tinggi Badan Laki-Laki: ", laki.getTB());
console.log("Tinggi Badan Laki-Laki2: ", laki2.getTB());