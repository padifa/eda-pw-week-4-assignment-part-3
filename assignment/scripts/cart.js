console.log("***** Cart Functions *****");

let basket = [];

function addItem(fruits) {
  let newItem = fruits;

  basket.push(newItem);

  return true;
}

console.log("the item was added", addItem(basket["fruits"]));

let i = 0;
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i] > 0) {
      console.log("The items are", listItems(basket[i]));
    }
  }
}

function listItems() {
  for (let i of basket);
  console.log(basket);
}
console.log("each individual item on a new line", listItems(basket["fruits"]));

function empty() {
  basket.length = 0;
  console.log(basket);
}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
