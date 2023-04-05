//your code here
function calculateTotal() {
  const prices = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.innerText);
  });
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotal.innerText = total.toFixed(2);
}

// call the function initially to calculate the total
calculateTotal();

// add an event listener to recalculate the total whenever a price is changed
const prices = document.querySelectorAll('[data-ns-test="price"]');
prices.forEach(price => {
  price.addEventListener('input', calculateTotal);
});
