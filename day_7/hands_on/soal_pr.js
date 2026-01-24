// PR hands on:

/**
 *! Shopping Cart management system in a clothing store
 ** - Buatlah sebuah function bernama "addToCart" yang menerima parameter berupa object product dan quantity
 * 
 * - Object product memiliki property berikut:
 *  - name
 *  - price
 *  - stocks
 *  - category
 * 
 * Discount rules (by kategori): -> ** DAPAT MENGGUNAKAN SWITCH CASE / IF ELSE
 *  - Kemeja, discount 20%
 *  - Kaos, discount 15%
 *  - Jeans, discount 12.75%
 *  - Sepatu, discount 12.5%
 *  - Jaket, discount 3.5%
 * 
 * - Scopes function
 *  - Check apakah stock product cukup untuk quantity yang dibeli
 *  - Jika stock cukup, maka check category product untuk mendapatkan discount
 *  - Jika discount ada, maka hitung total harga setelah discount
 *  - Jika discount tidak ada, maka hitung total harga tanpa discount
 *  - Return object berupa:
 *   - name
 *   - price
 *   - quantity
 *   - totalPrice
 *   - discount
 *   - totalPriceAfterDiscount
 *  - Tambahkan product ke dalam array currentProducts
 *  */

const currentProducts = [];

const product1 = {
    kodeProduct: 'KEM-001', // unique
    name: 'Kemeja Polos',
    price: 100000,
    stocks: 10,
    category: 'Kemeja',
};

const product2 = {
    kodeProduct: 'KAOS-001',
    name: 'Kaos Polos',
    price: 200000,
    stocks: 20,
    category: 'Kaos',
};

function addToCart(product, quantity) {
    if (product.stocks < quantity) {
        return {
            error: `Stock tidak cukup. Stock tersedia: ${product.stocks}, quantity diminta: ${quantity}`
        };
    }

    let discount = 0;
    switch (product.category) {
        case 'Kemeja':
            discount = 0.20; 
            break;
        case 'Kaos':
            discount = 0.15; 
            break;
        case 'Jeans':
            discount = 0.1275; 
            break;
        case 'Sepatu':
            discount = 0.125; 
            break;
        case 'Jaket':
            discount = 0.035; 
            break;
        default:
            discount = 0;
    }

    const totalPrice = product.price * quantity;
    const discountAmount = totalPrice * discount;
    const totalPriceAfterDiscount = totalPrice - discountAmount;

    const cartItem = {
        name: product.name,
        price: product.price,
        quantity: quantity,
        totalPrice: totalPrice,
        discount: discount * 100 + '%',
        discountAmount: discountAmount,
        totalPriceAfterDiscount: totalPriceAfterDiscount
    };

    // Add to currentProducts array
    currentProducts.push(cartItem);

    return cartItem;
}


console.log('tambah kemeja polos (quantity: 2)');
const result1 = addToCart(product1, 2);
console.log(result1);
console.log();

console.log('tambah kaos polos (quantity: 3)');
const result2 = addToCart(product2, 3);
console.log(result2);
console.log();

// tambah produk
const product3 = {
    kodeProduct: 'JEANS-001',
    name: 'Jeans Reguler',
    price: 150000,
    stocks: 5,
    category: 'Jeans',
};

console.log('tambah jeans reguler (quantity: 10)');
const result3 = addToCart(product3, 10);
console.log(result3);
console.log();

const product4 = {
    kodeProduct: 'CD-001',
    name: 'CD Superman',
    price: 5000,
    stocks: 5,
    category: 'CD',
};

console.log('tambah CD Superman (quantity: 5)');
const result4 = addToCart(product4, 5);
console.log(result4);
console.log();

console.log('=== menampilkan cart ===');
console.log(currentProducts);