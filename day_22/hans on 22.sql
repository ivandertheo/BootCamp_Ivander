-- 1
use pos_bootcamp
SELECT 
    t.id AS transaction_id,
    u.name AS cashier_name,
    c.name AS customer_name,
    pm.name AS payment_method,
    t.total_amount
FROM transactions t
JOIN users u 
    ON t.user_id = u.id
LEFT JOIN customers c 
    ON t.customer_id = c.id
LEFT JOIN payment_methods pm 
    ON t.payment_method_id = pm.id
WHERE t.total_amount > 20000
ORDER BY t.total_amount DESC;

-- 2
SELECT 
    pm.name AS payment_method,
    SUM(t.total_amount) AS total_sales,
    COUNT(t.id) AS total_transactions
FROM transactions t
JOIN payment_methods pm 
    ON t.payment_method_id = pm.id
GROUP BY pm.id, pm.name
ORDER BY total_sales DESC;

-- 3
SELECT 
    CASE 
        WHEN total_amount >= 30000 THEN 'Besar'
        ELSE 'Kecil'
    END AS kategori,
    COUNT(*) AS jumlah_transaksi
FROM transactions
GROUP BY kategori;

-- 4
SELECT 
    p.name AS product_name,
    SUM(td.quantity) AS total_quantity_sold,
    SUM(td.subtotal) AS total_revenue
FROM transaction_details td
JOIN products p 
    ON td.product_id = p.id
GROUP BY p.id, p.name
ORDER BY total_quantity_sold DESC;

-- 5
SELECT 
    name,
    'Customer' AS tipe
FROM customers
UNION
SELECT 
    name,
    'User' AS tipe
FROM users;