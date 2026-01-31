class Hewan {
    constructor(nama, ras, usia, gender, jumlahKaki) {
        this.nama = nama;
        this.ras = ras;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;
    }
    makeSound() {
        return "Suara Hewan";
    }
} 
class Kucing extends Hewan {
    constructor(hewan) {
        super(hewan.nama, hewan.ras, hewan.usia, hewan.gender, hewan.jumlahKaki);
    }
    makeSound() {
        return "Meong Meong";
    }
}

class Anjing extends Hewan {
    constructor(hewan) {
        super(hewan.nama, hewan.ras, hewan.usia, hewan.gender, hewan.jumlahKaki);
    }
    makeSound() {
        return "Guk Guk";
    }
}

class Sapi extends Hewan {
    constructor(hewan) {
        super(hewan.nama, hewan.ras, hewan.usia, hewan.gender, hewan.jumlahKaki);
    }
    makeSound() {
        return "Moo Moo";
    }
}

const hewan = new Hewan("Luna", "Persia", 2, "Betina", 4);
console.log(hewan.makeSound());
console.log(hewan);
const sapi = new Sapi(hewan);
console.log(sapi);
console.log(sapi.makeSound());
const anjing = new Anjing(hewan);
console.log(anjing.makeSound());
const kucing = new Kucing(hewan);
console.log(kucing.makeSound());

