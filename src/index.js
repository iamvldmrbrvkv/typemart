"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = 'fanny pack';
let shipping;
let taxPercent;
let taxTotal;
let total;
const product = products_1.default.find(product => product.name === productName);
console.log(product);
if ((product === null || product === void 0 ? void 0 : product.preOrder) === true) {
    console.log('We will send you a message when your product is on its way.');
}
let shippingAddress = '575 Broadway, New York City, New York';
if (Number(product === null || product === void 0 ? void 0 : product.price) > 25) {
    shipping = 0;
    console.log('Free shipping for this product.');
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.5;
}
taxTotal = Number(product === null || product === void 0 ? void 0 : product.price) * taxPercent;
total = Number(product === null || product === void 0 ? void 0 : product.price) + taxTotal + shipping;
console.log(`
Product: ${productName}
Address: ${shippingAddress}
Price: $${product === null || product === void 0 ? void 0 : product.price}
Tax: $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}
`);
