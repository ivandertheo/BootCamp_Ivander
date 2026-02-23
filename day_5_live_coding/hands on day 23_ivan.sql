use live_coding

-- 1
select * from products 

-- 2 
select name,email from users

-- 3
select * from products where price >= 1000000

-- 4
select  * from products where stock <= 15 

-- 5
select o.order_id, o.order_date, u.name from orders o join users u on o.user_id = u.user_id

-- 6
select o.order_id, p.name from orders o 
join order_items oi on o.order_id= oi.order_id
join products p on p.product_id = oi.product_id 

-- 7
select o.order_id, p.name, oi.quantity from orders o 
join order_items oi on o.order_id= oi.order_id
join products p on p.product_id = oi.product_id

-- 8
select p.name ,  sum(oi.quantity) as total_terjual from order_items oi 
join products p on p.product_id = oi.product_id
group by p.name

-- 9
select u.name , sum(oi.quantity*p.price) as total_belanja
from order_items oi
join orders o on oi.order_id=o.order_id
join products p on p.product_id = oi.product_id
join users u on u.user_id=o.user_id
group by u.name

-- 10
select o.order_id,u.name , 
case
when sum(oi.quantity*p.price) >= 5000000 then "Big Order" else "Regular Order"
end as kategori_order
from order_items oi
join orders o on oi.order_id=o.order_id
join products p on p.product_id = oi.product_id
join users u on u.user_id=o.user_id
group by o.order_id, u.name

-- 11
select name, 
case when price >= 1000000 then "Premium" else "Standard" end as kategori_harga
from products

-- 12
select u.name,
case
when o.status = 'paid' then "sudah bayar" else "belum bayar" end as status_order
from  orders o 
join users u on u.user_id = o.user_id

-- 13
select name from products where price >= (select avg(price) from products)