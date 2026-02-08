class Pegawai {
    #gaji;
    constructor(id, nama, golongan, tanggalLahir) {
        this.id = id;
        this.nama = nama;
        this.golongan = golongan;
        this.tanggalLahir = new Date(tanggalLahir);
    }
    getUsia() {
        const hariIni = new Date();
        let usia = hariIni.getFullYear() - this.tanggalLahir.getFullYear();

        if (hariIni < new Date(hariIni.getFullYear(), this.tanggalLahir.getMonth(), this.tanggalLahir.getDate())) {
            usia--;
        }
        
        return usia;
    }
    getGajiPokok() {
        switch (this.golongan) {
            case 1:
                if(this.getUsia() < 40) return 3500000;
                else return 4500000;
            case 2:
                if(this.getUsia() < 40) return 5000000;
                else return 6000000;
        }
    }
    getTunjangan() {
        return 1000000;
    }
    getTotalGaji() {
        return this.getGajiPokok() + this.getTunjangan();
    }
}

class Dosen extends Pegawai {
    constructor(id, nama, golongan, tanggalLahir, NIDN) {
        super(id, nama, golongan, tanggalLahir);
        this.NIDN = NIDN;
    }
    getTunjanganFungsional() {
        if(super.getUsia() < 40) return 1700000;
        else return 2000000;
    }
    getTunjangan() {
        return super.getTunjangan() + 500000;
    }
    getTotalGaji() {
        return super.getGajiPokok() + this.getTunjanganFungsional() + this.getTunjangan();
    }
}

const pegawai = new Pegawai(101, "Andi", 2, "1980-05-15");
console.log("gaji total = ", pegawai.getTotalGaji());
console.log("-----------------------");
const dosen = new Dosen(201, "Budi", 1, "1975-10-20", "NIDN12345");
console.log("gaji total dosen = ", dosen.getTotalGaji());