function onSearchchange(e) {
  let searchbox = document.querySelector(
    "#searchbox #inputcontainer .cross"
  ).classList;
  if (e.target.value.length > 0) searchbox.add("active");
  else {
    searchbox.remove("active");
  }
}
function removeboxcontent() {
  let input = document.querySelector("#searchbox input");
  input.value = "";
  document
    .querySelector("#searchbox #inputcontainer .cross")
    .classList.remove("active");
}
function injectheader()
{
  fetch('../component/dashboard/header.component.html').then((r)=>
  {
    return r.text();
  }).then((container)=>
  {
    document.querySelector('#head').innerHTML= container; 
  });
}
injectheader();
