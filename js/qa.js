window.onload = function () {
  qaTitles = document.getElementsByClassName("qa-title");

  for (let i = 0; i < qaTitles.length; i++) {
    const element = qaTitles[i];
    element.addEventListener("click", clickTitle);
  }

  function clickTitle(event) {
    switchStateImage(event);

    switchContent(event);
  }

  function switchStateImage(event) {
    const img = event.target.querySelector(".open-close");

    let imgSrc = img.src;

    if (imgSrc.indexOf("add") != -1) {
      img.src = "./img/qa/icon_minus.png";
    } else {
      img.src = "./img/qa/icon_add.png";
    }
  }

  function switchContent(event) {
    const qaContent = event.target.parentElement.querySelector(".qa-content");

    if (qaContent.style.display == "") {
      qaContent.style.display = "none";
    } else {
      qaContent.style.display = "";
    }
  }
};
