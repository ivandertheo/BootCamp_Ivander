<?php 
function tentukanGrade ($n) {
    if($n > 100 || $n < 0) {
        return "invalid";
    }
    if($n <= 100 && $n >= 85) {
        return "A";
    } else if ($n >=70) {
        return "B";
    } else if ($n >=60) {
        return "C";
    } else {
        return "D";
    }
}

$nilaiUjian = [100,70,60,0,96];
foreach($nilaiUjian as $nilai) {
    echo "Nilai: $nilai, Grade:"; echo tentukanGrade($nilai); echo "\n";
}
?>