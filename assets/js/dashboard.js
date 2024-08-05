function onSearchchange(e) {
  let searchbox = document.querySelector(
    "#searchbox #inputcontainer .cross"
  ).classList;
  let suggestions = document.querySelector(".suggestions").classList;

  if (e.target.value.length > 0) {
    searchbox.add("active");
    suggestions.add("active");
  } else {
    searchbox.remove("active");
    suggestions.remove("active");
  }
}
function removeboxcontent() {
  let input = document.querySelector("#searchbox input");
  let suggestions = document.querySelector(".suggestions").classList;
  input.value = "";
  document
    .querySelector("#searchbox #inputcontainer .cross")
    .classList.remove("active");
    suggestions.remove("active");
}
function injectheader() {
  fetch("../component/dashboard/header.component.html")
    .then((r) => {
      return r.text();
    })
    .then((container) => {
      document.querySelector("#head").innerHTML = container;
    });
}
injectheader();
function injectsidebar() {
  fetch("../component/dashboard/sidebar.html")
    .then((r) => {
      return r.text();
    })
    .then((container) => {
      document.querySelector("#sidebar").innerHTML = container;
    });
}
injectsidebar();
