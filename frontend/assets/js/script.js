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
