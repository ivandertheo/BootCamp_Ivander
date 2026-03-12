<?php 
$nama = "ivander";
$usia = 20;
$saldo = 10.1;
$statusAktif = true;
$hobi = "bola";

output($nama, $usia, $saldo, $statusAktif, $hobi);

echo "\n\n";

varDump($nama, $usia, $saldo, $statusAktif, $hobi);

echo "\n\n";

tampilkanProfile($nama, $usia, $saldo, $statusAktif, $hobi);

function output($nama, $usia, $saldo,$statusAktif,$hobi) {
    echo "nama saya: $nama,
    \nusia saya: $usia,
    \nsaldo: $saldo,
    \nisActive: " . ($statusAktif ? "true" : "false") . ",
    \nhobi: $hobi";
}

function varDump($nama, $usia, $saldo, $statusAktif, $hobi) {
    var_dump($nama);
    var_dump($usia);
    var_dump($saldo);
    var_dump($statusAktif);
    var_dump($hobi);
}
function tampilkanProfile ($nama, $usia, $saldo, $statusAktif, $hobi) {
    echo "PROFILE\n";
    echo "Nama: $nama\n";
    echo "Usia: $usia tahun\n";
    echo "Saldo: Rp $saldo\n";
    echo "Status Aktif: " . ($statusAktif ? "Aktif" : "Tidak Aktif") . "\n";
    echo "Hobi: $hobi\n";
}
?>