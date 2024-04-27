document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta", img: "1.jpg", price: 20 },
      { id: 2, name: "Arabica", img: "2.jpeg", price: 25 },
      { id: 3, name: "Primo", img: "3.jpeg", price: 30 },
      { id: 4, name: "Aceh gayo", img: "4.jpeg", price: 50 },
      { id: 5, name: "Sumatra", img: "5.jpeg", price: 55 },
    ],
  }));
});

// Convert to MYR
const myr = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 0,
  }).format(number);
};
