window.onload = function () {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let mail = document.getElementById("mail");
  let people = document.getElementById("people");
  let date = document.getElementById("date");
  resetDate();
  let time = document.getElementById("time");
  let options = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4"),
  ];

  let confirmed = document.getElementsByClassName("confirmed")[0];
  submit = document.getElementById("submit-reserve");
  submit.addEventListener("click", submitReserve);

  function submitReserve(event) {
    name.value = "";
    phone.value = "";
    mail.value = "";
    people.value = 1;
    resetDate();
    time.value = "am";

    options.forEach((option, value) => {
      option.checked = false;
    });

    confirmed.style.display = "";
  }

  function resetDate() {
    today = new Date();
    todayDate = today.getDate() > 10 ? today.getDate() : "0" + today.getDate();
    date.value =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + todayDate;
  }

  //打開漢堡選單
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
