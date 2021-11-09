window.onload = function () {
  //控制輪播的值
  $(".owl-carousel").owlCarousel({
    margin: 50,
    lazyLoad: true,
    loop: true,
    autoWidth: true,
    dots: true,
    dotsEach: true,
  });
  // 打開漢堡選單
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
