// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    const prod = products.find(item => item.id === id);
    if(prod) {
        const exist = cart.findIndex (item => item.id === id);

        if(exist !== -1) {
            cart[exist].quantity++;
            console.log(`S'ha incrementat la quantitat del producte ${prod.name} al carret. Quantitat total: ${cart[exist].quantity}`);
        } else {
            cart.push({...prod, quantity: 1});
        }
        console.log(`Producte afegit al carret: ${prod.name}`);
    }
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {
    cart = [];
    console.log("El carret s'ha buidat correctament.");
}

// Exercise 3
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity;
    }

    return total;
    // Calculate total price of the cart using the "cartList" array
}

console.log("Carret", cart);
console.log("Import", calculateTotal());

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}