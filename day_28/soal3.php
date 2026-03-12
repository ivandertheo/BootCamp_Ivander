<?php 
function hitungTotalBelanja($daftarBelanja, $isMember=false) {
    $grandTotal = 0;
    $totalQty = 0;
    foreach ($daftarBelanja as $item) {
        $subtotal = $item["harga"] * $item["qty"];
        $grandTotal += $subtotal;
        $totalQty += $item["qty"];
    }

    $diskonPersen = 0;
    if ($isMember) {
        $diskonPersen += 15;
    }

    if ($totalQty > 5) {
        $diskonPersen += 5;
    }

    $diskonNominal = $grandTotal * ($diskonPersen / 100);
    $totalBayar = $grandTotal - $diskonNominal;

    return [
        "grandTotal" => $grandTotal,
        "totalQty" => $totalQty,
        "diskonPersen" => $diskonPersen,
        "diskonNominal" => $diskonNominal,
        "totalBayar" => $totalBayar
    ];
}
$belanja1 = [
    ["nama"=> "Item A", "harga"=> 25000, "qty" => 2],
    ["nama"=> "Item B", "harga"=> 20000, "qty" => 3],
    ["nama"=> "Item C", "harga"=> 15000, "qty" => 4],
    ["nama"=> "Item D", "harga"=> 10000, "qty" => 5]
];
$hasil1 = hitungTotalBelanja($belanja1);

echo "belanja 1\n";
echo "Total Qty: " . $hasil1["totalQty"] . "\n";
echo "Grand Total: Rp " . number_format($hasil1["grandTotal"],0,",",".") . "\n";
echo "Diskon: " . $hasil1["diskonPersen"] . "%\n";
echo "Diskon Nominal: Rp " . number_format($hasil1["diskonNominal"],0,",",".") . "\n";
echo "Total Bayar: Rp " . number_format($hasil1["totalBayar"],0,",",".") . "\n";

$belanja2 = [
    ["nama" => "Buku Tulis", "harga" => 10000, "qty" => 3],
    ["nama" => "Pulpen", "harga" => 7000, "qty" => 4]
];

$hasil2 = hitungTotalBelanja($belanja2, true);

echo "belanja 2\n";
echo "Total Qty: " . $hasil2["totalQty"] . "\n";
echo "Grand Total: Rp " . number_format($hasil2["grandTotal"],0,",",".") . "\n";
echo "Diskon: " . $hasil2["diskonPersen"] . "%\n";
echo "Diskon Nominal: Rp " . number_format($hasil2["diskonNominal"],0,",",".") . "\n";
echo "Total Bayar: Rp " . number_format($hasil2["totalBayar"],0,",",".") . "\n";
?>