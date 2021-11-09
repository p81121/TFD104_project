window.onload = function () {
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
