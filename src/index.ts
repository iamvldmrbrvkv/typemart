import products from './products';

let productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.find(product => product.name === productName);

console.log(product)

if (product?.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}

let shippingAddress: string = '575 Broadway, New York City, New York';

if (Number(product?.price) > 25) {
  shipping = 0
  console.log('Free shipping for this product.')
} else {
  shipping = 5
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1
} else {
  taxPercent = 0.5
}

taxTotal = Number(product?.price) * taxPercent

total = Number(product?.price) + taxTotal + shipping

console.log(`
Product: ${productName}
Address: ${shippingAddress}
Price: $${product?.price}
Tax: $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}
`)