/**
 * counter "yes"
 * 
 * input terminal adalah "yes" / "no"
 * 
 * output adalah angka dari berapa kali jumlah "yes"
 * 
 * tips: ini menggunakan infinity looping & break
 */

const prompt = require('prompt-sync')();
let countYes = 0
const input = prompt('continue (yes) / berhenti (no) ? ');
while(input.match("yes")) {
    countYes++;
    const input = prompt('continue (yes) / berhenti (no) ? ');
    if(input.match("no")) {
        break;
    }
}
console.log(`Anda menginput "yes" sebanyak ${countYes} kali`);