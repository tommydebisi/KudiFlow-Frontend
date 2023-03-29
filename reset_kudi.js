const newpasswordField = document.getElementById("newPassword");
const newpasswordIcon = document.querySelector(".new-pass");
const confirmpasswordField = document.getElementById("confirmPassword");
const confirmpasswordIcon = document.querySelector(".confirm-pass");

newpasswordIcon.addEventListener("click", function () {
  if (newpasswordField.type === "password") {
    newpasswordField.type = "text";
    newpasswordIcon.classList.remove("ti-eye-off");
    newpasswordIcon.classList.add("ti-eye");
  } else {
    newpasswordField.type = "password";
    newpasswordIcon.classList.remove("ti-eye");
    newpasswordIcon.classList.add("ti-eye-off");
  }
});

confirmpasswordIcon.addEventListener("click", function () {
  if (confirmpasswordField.type === "password") {
    confirmpasswordField.type = "text";
    confirmpasswordIcon.classList.remove("ti-eye-off");
    confirmpasswordIcon.classList.add("ti-eye");
  } else {
    confirmpasswordField.type = "password";
    confirmpasswordIcon.classList.remove("ti-eye");
    confirmpasswordIcon.classList.add("ti-eye-off");
  }
});

// return back class
const backButton = document.querySelector(".return-button");

backButton.addEventListener("click", () => {
  window.history.back();
});
