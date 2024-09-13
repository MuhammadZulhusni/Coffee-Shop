// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
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
