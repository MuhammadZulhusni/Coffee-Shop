// Listen for the 'alpine:init' event to initialize Alpine.js components
document.addEventListener("alpine:init", () => {
  // Define an Alpine.js data component named 'products'
  Alpine.data("products", () => ({
    // Array of product items with id, name, image, and price properties
    items: [
      { id: 1, name: "Robusta", img: "1.jpg", price: 20 }, // Product 1
      { id: 2, name: "Arabica", img: "2.jpeg", price: 25 }, // Product 2
      { id: 3, name: "Primo", img: "3.jpeg", price: 30 }, // Product 3
      { id: 4, name: "Aceh", img: "4.jpeg", price: 50 }, // Product 4
      { id: 5, name: "Sumatra", img: "5.jpeg", price: 55 }, // Product 5
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Check if ada barang yg sama dlm cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // If belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // Jika barang sudah ada, check adakah barang berbeza or sama dengan yg ada di cart
        this.items = this.items.map((item) => {
          // If barang berbeza
          if (item.id !== newItem.id) {
            return item;
          } else {
            // Jika barang sudah ada, tambah quantity & totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // Ambil item yang mahu di remove based on id nya
      const cartItem = this.items.find((item) => item.id === id);
      // If item di cart lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          // If bukan barang yg di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // If barang tinggal 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Form validation
// Select the checkout button and disable it initially
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true; // Button is disabled initially

// Select the form by its ID
const form = document.querySelector("#checkoutForm");

// Add an event listener for the 'keyup' event on the form
form.addEventListener("keyup", function () {
  // Loop through each form element
  for (let i = 0; i < form.elements.length; i++) {
    // If any form element has a non-empty value
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled"); // Remove "disabled" class
      checkoutButton.classList.add("enabled"); // Add "enabled" class
    } else {
      return false; // Stop if any field is empty
    }
  }

  // Enable the checkout button when all fields are filled
  checkoutButton.disabled = false; // Enable the button
  checkoutButton.classList.remove("disabled"); // Remove "disabled" class
});

// Send data bila button checkout diklik
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission action
  const formData = new FormData(form); // Create a FormData object from the form
  const data = new URLSearchParams(formData); // Convert FormData to URLSearchParams for easier manipulation
  const objData = Object.fromEntries(data); // Convert URLSearchParams to a plain object
  const message = formatMessage(objData); // Generate the formatted message using the data

  // Open WhatsApp with the formatted message
  window.open("http://wa.me/60182400849?text=" + encodeURIComponent(message));
});

// Format order message for WhatsApp
const formatMessage = (obj) => {
  // Customer name, Customer email, Customer phone number
  return `Data Customer
  Name:  ${obj.name}                    
  Email: ${obj.email}                  
  No HP: ${obj.phone}                   
  
  Data Pesanan
  ${
    JSON.parse(obj.items) // Parse items from JSON string to array
      .map((item) => `${item.name} (${item.quantity} x ${myr(item.total)}) \n `) // Format each item's name, quantity, and total price
  }
  TOTAL: ${myr(obj.total)}              // Format total price in MYR
  Terima Kasih.`; // Thank you message at the end
};

// Convert to MYR
// Function to format a number as Malaysian Ringgit (MYR)
const myr = (number) => {
  return new Intl.NumberFormat("id-ID", {
    // Use Indonesian locale formatting
    style: "currency", // Format as currency
    currency: "MYR", // Set currency to Malaysian Ringgit (MYR)
    minimumFractionDigits: 0, // No decimal places
  }).format(number); // Format and return the number
};
