const innerwidth = window.innerWidth;
console.log(innerwidth);
const web3Image = document.getElementById("web3Image");
if (innerwidth <= 600) {
  web3Image.src = "/assets/images/image-web-3-mobile.jpg";
}

function togglemenu(button) {
  const menu = document.querySelector(".nav-container");
  button.classList.toggle("active");
  if (button.classList.value == "active") {
    button.style.position = "fixed";
    menu.style.visibility = "visible";
  } else {
    button.style.position = "unset";
    menu.style.visibility = "hidden";
  }
}
