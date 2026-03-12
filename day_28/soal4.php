<?php 
function prosesDataSiswa($dataSiswa) {
    $hasil = [];

    foreach ($dataSiswa as $siswa) {

        $rataRata = array_sum($siswa["nilai"]) / count($siswa["nilai"]);

        $siswa["rataRata"] = $rataRata;

        if ($rataRata >= 85) {
            $siswa["status"] = "Lulus dengan pujian";
        } elseif ($rataRata >= 70) {
            $siswa["status"] = "Lulus";
        } else {
            $siswa["status"] = "Remedial";
        }

        $hasil[] = $siswa;
    }

    return $hasil;
}
$daftarSiswa = [
    ["nama" => "Budi1", "jurusan" => "RPL1", "nilai" => [80,90,75]],
    ["nama" => "Budi2", "jurusan" => "RPL2", "nilai" => [50,40,35]],
    ["nama" => "Budi3", "jurusan" => "RPL3", "nilai" => [60,70,75]],
];

$hasilSiswa = prosesDataSiswa($daftarSiswa);

$siswaLulus = [];

foreach ($hasilSiswa as $siswa) {
    if ($siswa["status"] != "Remedial") {
        $siswaLulus[] = $siswa;
    }
}

echo "daftar siswa lulus\n";

foreach ($siswaLulus as $siswa) {
    echo "Nama: " . $siswa["nama"] . "\n";
    echo "Jurusan: " . $siswa["jurusan"] . "\n";
    echo "Rata-rata: " . number_format($siswa["rataRata"], 2) . "\n";
    echo "Status: " . $siswa["status"] . "\n";
    echo "\n";
}
?>