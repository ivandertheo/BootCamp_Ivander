class User {
    constructor(nama, umur, gender, pekerjaan) {
        this.nama = nama;
        this.umur = umur;
        this.gender = gender;
        this.pekerjaan = pekerjaan;
    }
    getNama() {
        return this.nama;
    }
    getUmur() {
        return this.umur;
    }
    getGender() {
        return this.gender;
    }
    getPekerjaan() {
        return this.pekerjaan;
    }
}

class VIP extends User{
    #isVIP=false;
    constructor(user, isVIP) {
        super(user.nama, user.umur, user.gender, user.pekerjaan);
        this.#isVIP = isVIP;
    }
    getVIP() {
        return this.#isVIP;
    }
    setIsVIP(status) {
        this.#isVIP = status;
    }
}

class Activity extends User{
    constructor(user) {
        super(user.nama, user.umur, user.gender, user.pekerjaan);
    }
    ngoding() {
        return "lagi ngoding...";
    }
    tidur() {
        return "lagi tidur";
    }
    gantiKerjaan(pekerjaanBaru) {
        this.pekerjaan = pekerjaanBaru;
        return this.pekerjaan;
    }
}
const student1 = new User("Ivander", 20, "Laki-Laki", "Fullstack Dev");
const VIP1 = new VIP(student1, true);
const aktivitas = new Activity(student1);
console.log(student1);
console.log(VIP1.getVIP());
aktivitas.gantiKerjaan("tidur")
console.log(aktivitas);