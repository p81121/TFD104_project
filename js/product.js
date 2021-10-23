window.onload = function () {
  let productCount = document.getElementById("product-count");
  document.getElementById("add").addEventListener("click", addCount);
  document.getElementById("minus").addEventListener("click", minusCount);

  let count = 1;

  function addCount() {
    count += 1;
    showCount();
  }

  function minusCount() {
    if (count > 1) {
      count -= 1;
    }
    showCount();
  }

  function showCount() {
    productCount.textContent = count;
  }
};
