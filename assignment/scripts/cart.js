console.log("***** Cart Functions *****");

let basket = [];
const maxItems = 5;
function addItem(newItem) {
  //use the isFull() function to prevent more items
  //to be pushed into the basket

  if (isFull()) {
    console.log("the basket is full!!");
    return false;
  } else {
    basket.push(newItem);
    return true;
  }
}

console.log("the apples was added", addItem("apples"));
console.log("the Oranges was added", addItem("Oranges"));
console.log("the Bananas was added", addItem("Bananas"));
console.log("the Mangoes was added", addItem("Mangoes"));
console.log("my basket", basket);

function listItems() {
  for (let i of basket) console.log("my item: ", i);
}

listItems();

function empty() {
  basket.length = 0;
  return;
}
//call the function 'empty'
empty();

//now, check what is in the basket?
console.log("basket should be empty", basket);

//Stretch Goals
//Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

//Using functions in other functions!

//Add a global const named maxItems and set it to 5.

//Create a function called isFull(). It should:
function isFull() {
  if (basket.length < maxItems) {
    //return false if the basket contains less than max number of items
    return false;
    //return true otherwise (equal or more than maxItems)
  } else {
    return true;
  }
}

console.log("Basket is full", isFull());

//Update the required addItem function to:
//Use the isFull function to prevent more than maxItems from being added to the basket.

console.log("the strawberries were added", addItem("strawberries"));
console.log("the cherries were added", addItem("cherries"));
console.log("the blueberries were added", addItem("blueberries"));

console.log("the basket right now", basket);

console.log("Basket is full now?", isFull());

//If an item was added to the array, return true
//If there was no room and the item could not be added return false
//Using Array built-in functions!

//Create a function called removeItem. It should:
function removeItem(item) {
  // test with the item === 'strawberries'

  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === item) {
      let removeItem = basket.indexOf(item);
      console.log('what is the removeItem index', removeItem);
      basket.splice(removeItem, 1);
      return item;
    }
  }
  return null;
}

console.log('what was removed', removeItem("blueberries"));
console.log("The remaining items are:", basket);

//Use Array.indexOf to find the index of the first matching item in the basket.
//Use Array.splice to remove the first matching item from the basket.
//Return the item removed or null if the item was not found

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
