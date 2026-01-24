class Usertest {
    constructor(nama, umur, jumlahUang, gender) {
        this.nama = nama;
        this.umur=umur;
        this.jumlahUang=jumlahUang;
        this.gender=gender;
    }
    tambahUang(uang) {
        return this.jumlahUang+=uang;
    }
    kurangUang(uang) {
        return this.jumlahUang-=uang;
    }
}

const ivan = new Usertest("ivander", 20, 20000, "laki-laki");

ivan.tambahUang(1000);
console.log(ivan);
ivan.kurangUang(1000);
console.log(ivan);
