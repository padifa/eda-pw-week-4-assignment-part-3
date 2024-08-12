console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//In this section we will write some functions that might be used in a simple cart system for a store.

//Required Features
//Update the cart.js file to do the following:

//Create a global variable named basket and set it to an empty array.
let basket = [];
//Create a function called addItem. It should:
//take an input parameter for a string item
function addItem(fruits){
    let newItem = fruits;
//add the new item to the global array basket.

basket.push(newItem);

//return true indicating the item was added

return true;
}

console.log('the item was added', addItem(basket['fruits']));
//Create a function called listItems. It should:
let i = 0;
function listItems(){
    for(let i = 0; i < basket.length; i++){
        if(basket[i] > 0){
            console.log('The items are', listItems(basket[i]));
        }
        
    } 
}

//loop over the items in the basket array
//console.log each individual item on a new line
//Create a function called empty. It should:
//reset the basket to an empty array
//do not use basket = [] to reset the array

function listItems(){
    for(let i of basket);
    console.log(basket);
}
console.log('each individual item on a new line', listItems(basket['fruits']));

function empty(){
basket.length = 0;
console.log(basket);

}
//IMPORTANT Make sure that you are writing code in the file to test every function that you write!
//For example, to test addItem:

//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);

//Stretch Goals
//Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

//Using functions in other functions!

//Add a global const named maxItems and set it to 5.

//Create a function called isFull(). It should:

//return false if the basket contains less than max number of items
//return true otherwise (equal or more than maxItems)
//Update the required addItem function to:
//Use the isFull function to prevent more than maxItems from being added to the basket.
//If an item was added to the array, return true
//If there was no room and the item could not be added return false
//Using Array built-in functions!

//Create a function called removeItem. It should:
//Take an input parameter for a string item
//Use Array.indexOf to find the index of the first matching item in the basket.
//Use Array.splice to remove the first matching item from the basket.
//Return the item removed or null if the item was not found








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
