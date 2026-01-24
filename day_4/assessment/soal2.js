let nilai = [85,95.20,67.75,78,75]
console.log(`rata rata: ${mean(nilai)} \ngrade akhir: ${grade(mean(nilai))}`)
function mean(nilai) {
    let mean=0;
    for(let i = 0; i<nilai.length;i++) {
        mean=mean+nilai[i];
    }
    return (mean/nilai.length);
}
function grade(mean) {
    if(mean<=0 && mean>=100) {
        return "nilai tidak valid";
    }
    if(mean>=90 && mean<=100) {
        return "A";
    } else if(mean>=80 && mean <=89.99) {
        return "B";
    } else if(mean >=75 && mean <=79.99) {
        return "C";
    } else if(mean >= 60 && mean <=774.99) {
        return "D";
    } else {
        return "E"
    }
}