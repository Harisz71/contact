document
  .querySelector("#mainloginpage")
  .addEventListener("click", showloginbox);
document
  .querySelector("#loginDialogue .cancelbtn")
  .addEventListener("click", (e) => {
    removeloginbox();
  });
function showloginbox() {
  let loginDialogue = document.querySelector("#loginDialogue");
  loginDialogue.classList.add("active");
}
function removeloginbox() {
  let loginDialogue = document.querySelector("#loginDialogue");
  loginDialogue.classList.remove("active");
}

//register Dialogue

document
  .querySelector("#mainregisterbtn")
  .addEventListener("click", showregisterbox);
document
  .querySelector("#registerDialogue .cancelbtn")
  .addEventListener("click", hideregisterbox);
function showregisterbox() {
  let registerDialogue = document.querySelector("#registerDialogue");
  registerDialogue.classList.add("active");
}
function hideregisterbox() {
  let registerDialogue = document.querySelector("#registerDialogue");
  registerDialogue.classList.remove("active");
}
function formchange() {
  let form = document.querySelector("#loginDialogue form");
  let email = form.querySelector('input[type="email"]').value;
  let password = form.querySelector('input[type="password"]').value;

  if (email.length > 0 && password.length > 0) {
    form.querySelector('button[type="submit"]').removeAttribute("disabled");
  } else {
    form
    .querySelector('button[type="submit"]')
    .setAttribute("disabled", "disabled");
  }
}
