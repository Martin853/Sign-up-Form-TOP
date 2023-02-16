const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const button = document.querySelector("#create-account");
const alert = document.querySelector("#passwords-do-not-match");

button.addEventListener("click", function () {
  if (password.value.length > 7 && confirmPassword.value.length > 7) {
    if (password.value != confirmPassword.value) {
      alert.style.display = "block";
    } else {
      alert.style.display = "none";
    }
  }
});
