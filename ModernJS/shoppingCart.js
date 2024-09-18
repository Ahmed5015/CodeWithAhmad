import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const cart = [];
export default { cart };
export function addToCart(item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to the cart.`);
}
const totalPrice = 235;
const price = 23;

export { totalPrice as tp, price };

// function (item, quantity) {
//   console.log(`${quantity} ${item} added to the cart.`);
// }
