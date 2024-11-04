// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 10.5,
    type: "Ropa de hombre",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "T-Shirt limited",
    price: 6.25,
    type: "Ropa de hombre",
  },
  {
    id: 3,
    name: "Jacket",
    price: 5,
    type: "Ropa de hombre",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "Sleepwear",
    price: 26,
    type: "Ropa de cama",
  },
  {
    id: 5,
    name: "Nightwear",
    price: 20.5,
    type: "Ropa de cama",
  },
  {
    id: 6,
    name: "Loungewear",
    price: 12.75,
    type: "Ropa de cama",
  },
  {
    id: 7,
    name: "Dreamland",
    price: 15,
    type: "Ofertas",
  },
  {
    id: 8,
    name: "Cozy Corner",
    price: 19.99,
    type: "Ofertas",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "Ofertas",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  const cartProduct = cart.find((product) => product?.id === id);
  if (cartProduct) {
    cartProduct.count = cartProduct.count + 1;
  } else {
    const findProduct = products.find((product) => product.id === id);
    findProduct.count = 1;
    cart.push(findProduct);
  }
  calculateSubtotalProduct();
  applyPromotionsCart();
  countProducts();

  const addProduct = products.find((product) => product.id === id);
  alert(`${addProduct.name} se ha añadido a la cesta`);
}

// Exercise 1.1.
function countProducts() {
  const countProduct = document.getElementById("count_product");
  countProduct.textContent = cart.length;
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  printCart();
  countProducts();
}

// Exercise 3
function calculateTotalCart() {
  const totalCart = cart.reduce(
    (acum, producto) => acum + parseFloat(producto.subtotal),
    0
  );
  return parseFloat(totalCart).toFixed(2);
}

// Ecercise 3.1
function calculateSubtotalProduct() {
  cart.forEach(
    (product) =>
      (product.subtotal = parseFloat(product.count * product.price).toFixed(2))
  );
}

// Exercise 4
function applyPromotionsCart() {
  cart.forEach((product) => {
    if (product?.offer && product.count >= product?.offer?.number) {
      product.subtotal = parseFloat(
        product.count * product.price * (1 - product.offer.percent / 100)
      ).toFixed(2);
    }
  });
}

// Exercise 5
function printCart() {
  const cartList = document.getElementById("cart_list");
  const totalPrice = document.getElementById("total_price");

  let row = "";

  cart.forEach((producto, index) => {
    row += `
               <tr>
                  <th scope="row">${producto.name}</th>
                  <td>$${producto.price}</td>
                  <td>${producto.count}</td>
                  <td>${producto.subtotal}</td>
                  <td>
                    <button
                      type="button"
                      onclick="addFromCart(${index})"
                      class="btn btn-outline-dark"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onclick="removeFromCart(${index})"
                      class="btn btn-outline-dark"
                    >
                      -
                    </button>
                  </td>
                </tr>
  
  `;
  });
  cartList.innerHTML = row;
  totalPrice.textContent = calculateTotalCart();
}

// ** Nivell II **

// Exercise 7
function addFromCart(index) {
  cart[index].count = cart[index].count + 1;
  calculateSubtotalProduct();
  applyPromotionsCart();
  printCart();
  calculateTotalCart();
}

function removeFromCart(index) {
  cart[index].count = cart[index].count - 1;
  if (cart[index].count === 0) {
    cart.splice(index, 1);
  }
  calculateSubtotalProduct();
  applyPromotionsCart();
  printCart();
  calculateTotalCart();
  countProducts();
}

function open_modal() {
  printCart();
}
