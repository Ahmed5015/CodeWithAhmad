// import addToCart, { tp, price } from './shoppingCart.js';
import * as shoppingCart from './shoppingCart.js';
import cart from './shoppingCart.js';
shoppingCart.addToCart('Apples', 5);
shoppingCart.addToCart('Apples', 2);
console.log(shoppingCart.tp, shoppingCart.price);
console.log('importing module');

console.log(cart);
// import add from './shoppingCart.js';
// add('pizza', 2);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
lastPost.then(res => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);
////////////////////////////////////////////////////////////////////////
const addToShoopingCart = (function () {
  const cart = [];
  const totalPrice = 235;
  const price = 23;
  function addToCart(item, quantity) {
    cart.push({ item, quantity });
    console.log(`${quantity} ${item} added to the cart.`);
  }
  const orderStock = function (item, quantity) {
    cart.push({ item, quantity });
    console.log(`${quantity} ${item} ordered.`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    price,
  };
})();
addToShoopingCart.addToCart('milk', 3);
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/array/promise';
import 'regenerator-runtime/runtime';
