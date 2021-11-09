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

  let burger_menu = document.getElementsByClassName("burger")[0];
  burger_menu.addEventListener("click", function () {
    var burger_list = document.getElementsByClassName("rwd-burger-list")[0];
    if (burger_list.style.display == "none") {
      burger_list.style.display = "";
    } else {
      burger_list.style.display = "none";
    }
  });
};
