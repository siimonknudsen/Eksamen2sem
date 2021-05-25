/* KONTAKTFORMULAR */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


/* CHATBOX */

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/* SEND ALERT */

function alertFunction() {
  alert("Succes! Din besked er blevet sendt.");
}