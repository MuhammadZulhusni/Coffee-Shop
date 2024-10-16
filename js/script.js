// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle 'active' class for the search form and focus on the search box
const searchForm = document.querySelector(".search-form"); // Select the search form element
const searchBox = document.querySelector("#search-box"); // Select the search box input
// Add click event listener to the search button
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active"); // Toggle 'active' class to show/hide the search form
  searchBox.focus(); // Focus on the search box input
  e.preventDefault(); // Prevent the default behavior (e.g., form submission)
};

// Toggle class active untuk shopping cart
// Select the shopping cart element
const shoppingCart = document.querySelector(".shopping-cart");
// Add click event listener to the shopping cart button
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active"); // Toggle the 'active' class to show/hide the shopping cart
  e.preventDefault(); // Prevent the default behavior (e.g., page navigation)
};

// Klik di luar elemen
// Select the hamburger menu, search button, and shopping cart button
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
// Add an event listener to the document to handle clicks anywhere on the page
document.addEventListener("click", function (e) {
  // If the click is outside the hamburger menu and the navbar, close the navbar
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active"); // Remove 'active' class to hide the navbar
  }
  // If the click is outside the search button and the search form, close the search form
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active"); // Remove 'active' class to hide the search form
  }
  // If the click is outside the shopping cart button and the shopping cart, close the cart
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active"); // Remove 'active' class to hide the shopping cart
  }
});

// Modal Box
// Select the modal element
const itemDetailModal = document.querySelector("#item-detail-modal");
// Select all buttons that trigger the item detail modal
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
// Add click event listener to each item detail button
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex"; // Display the modal as a flexbox
    e.preventDefault(); // Prevent the default behavior (e.g., following a link)
  };
});

// klik tombol close modal
// Close the modal when the close icon is clicked
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none"; // Hide the modal by setting its display to "none"
  e.preventDefault(); // Prevent the default behavior of the anchor tag
};

// Close the modal when clicking outside of it
window.onclick = (e) => {
  // Check if the click target is the modal itself
  if (e.target === itemDetailModal) {
    // If true, hide the modal by setting its display to "none"
    itemDetailModal.style.display = "none";
  }
};
