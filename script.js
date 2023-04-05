//your code here
function calculateTotal() {
  const prices = document.querySelectorAll('[data-ns-test="prices"]');
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotal.textContent = total.toFixed(2);
}

// call the function initially to calculate the total
calculateTotal();

// add an event listener to recalculate the total whenever a price is changed
const prices = document.querySelectorAll('[data-ns-test="prices"]');
prices.forEach(price => {
  price.addEventListener('input', calculateTotal);
});
