function checkPass() {
  var pass1 = document.getElementById("pwd");
  var pass2 = document.getElementById("pwd1");
  var message = document.getElementById("confirmMessage");

  if (password.value == password2.value) {
    password2.style.backgroundColor = goodColor;
    message.style.color = goodColored;
    message.innerHTML = "<i class='fa fa-check'></i>";
  } else {
    password2.style.backgroundColor = badColor;
    message.style.color = badColored;
    message.innerHTML = "<i class='fa fa-close'></i>";
  }
}
