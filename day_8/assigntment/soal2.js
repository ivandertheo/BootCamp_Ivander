class Orang {
    #usia;
    #gender;
    #totalEnergi;
    constructor(nama, usia, gender, totalEnergi) {
        this.nama = nama;
        this.#usia = usia;
        this.#gender = gender;
        this.#totalEnergi = totalEnergi;
    }
    getUsia() {
        return this.#usia;
    }
    getGender() {
        return this.#gender;
    }
    setTotalEnergi(energi) {
        this.#totalEnergi = energi;
    }
    getTotalEnergi() {
        return this.#totalEnergi;
    }
    aktifitasMakanMinum() {
        if(this.#usia<=10) {
            this.#totalEnergi += 10;
            console.log(`anda melakukan aktivitas makan/minum \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else if(this.#usia>10 && this.#usia<=25) {
            this.#totalEnergi += 2;
            console.log(`anda melakukan aktivitas makan/minum \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else if(this.#usia>25) {
            this.#totalEnergi += 2;
            console.log(`anda melakukan aktivitas makan/minum \nsisa energi anda adalah ${this.#totalEnergi}`);
        }   
    }
    aktifitasTidur(jam) {
        if(this.#usia<=10) {
            this.#totalEnergi += jam * 3;
            console.log(`anda melakukan aktivitas tidur selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else if(this.#usia>10 && this.#usia<=25) {
            this.#totalEnergi += jam * 2;
            console.log(`anda melakukan aktivitas tidur selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else {
            this.#totalEnergi += jam * 1;
            console.log(`anda melakukan aktivitas tidur selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        }
    }
    aktifitasSekolahKerja(jam) {
        if(this.#totalEnergi<=0) {
            console.log("Anda tidak memiliki energi untuk melakukan aktivitas ini\nSilahkan makan/minum atau tidur terlebih dahulu");
            return;
        } else {
            if(this.#usia<=10 && this.#totalEnergi>=jam * 3) {
                this.#totalEnergi -= jam * 3;
                console.log(`anda melakukan aktivitas sekolah/kerja selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
            } else if(this.#usia>10 && this.#usia<=25 && this.#totalEnergi>=jam * 5) {
                this.#totalEnergi -= jam * 5;
                console.log(`anda melakukan aktivitas sekolah/kerja selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
            } else if(this.#usia >25 && this.#totalEnergi>=jam * 7) {
                this.#totalEnergi -= jam * 7;
                console.log(`anda melakukan aktivitas sekolah/kerja selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
            } else {
                console.log("Energi anda tidak cukup untuk melakukan aktivitas ini");
            } 
        }
    }
    aktifitasOlahraga(jam) {
        if(this.#usia<=10) {
            this.#totalEnergi += jam * 2;
            console.log(`anda melakukan aktivitas olahraga selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else if(this.#usia>10 && this.#usia<=25) {
            this.#totalEnergi += jam * 3;
            console.log(`anda melakukan aktivitas olahraga selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        } else {
            this.#totalEnergi += jam * 5;
            console.log(`anda melakukan aktivitas olahraga selama ${jam} jam \nsisa energi anda adalah ${this.#totalEnergi}`);
        }
    }
}
const orang1 = new Orang("Ivander", 20, "Laki-Laki", 1);
console.log(orang1);
orang1.aktifitasSekolahKerja(2);
orang1.aktifitasOlahraga(2);
orang1.aktifitasMakanMinum();
orang1.aktifitasTidur(3);
console.log(`gender: ${orang1.getGender()}`);
console.log(`usia: ${orang1.getUsia()}`);
console.log(`total energi: ${orang1.getTotalEnergi()}`);
orang1.setTotalEnergi(100);
console.log(`total energi setelah di set: ${orang1.getTotalEnergi()}`);