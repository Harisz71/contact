function injectlogindialoge() {
  fetch("frontend/component/login.component.html")
    .then((r) => {
      return r.text();
    })
    .then((loginDialogueHTML) => {
      let container = document.createElement("div");
      container.innerHTML = loginDialogueHTML;
      document.body.appendChild(container);

      document
        .querySelector("#loginDialogue .cancelbtn")
        .addEventListener("click", removeloginbox);
    });
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

function showloginbox() {
  let loginDialogue = document.querySelector("#loginDialogue");
  loginDialogue.classList.add("active");
}
function removeloginbox() {
  let loginDialogue = document.querySelector("#loginDialogue");
  loginDialogue.classList.remove("active");
}

injectlogindialoge();
document
  .querySelector("#mainloginpage")
  .addEventListener("click", showloginbox);

