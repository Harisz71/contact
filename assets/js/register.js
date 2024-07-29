function injectregisterdialogue() {
  fetch("component/register.component.html")
    .then((r) => {
      return r.text();
    })
    .then((registerDialogueHTML) => {
      let container = document.createElement("div");
      container.innerHTML = registerDialogueHTML;
      document.body.appendChild(container);
      document
        .querySelector("#registerDialogue .cancelbtn")
        .addEventListener("click", hideregisterbox);
    });
}
function showregisterbox() {
  let registerDialogue = document.querySelector("#registerDialogue");
  registerDialogue.classList.add("active");
}
function hideregisterbox() {
  let registerDialogue = document.querySelector("#registerDialogue");
  registerDialogue.classList.remove("active");
}
//register Dialogue
injectregisterdialogue();
document
  .querySelector("#mainregisterbtn")
  .addEventListener("click", showregisterbox);
