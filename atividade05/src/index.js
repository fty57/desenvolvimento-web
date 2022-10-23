function assinar() {
  window.location.href = "login.html";
}

function toggleButton() {
  const email = document.querySelector("#validationCustom01").value;
  const password = document.querySelector("#floatingPassword").value;

  if (email && password) {
    document.querySelector("#validateBtn").disabled = false;
    return;
  }

  document.querySelector("#validateBtn").disabled = true;
}

function checkPasswordSucess() {
  const password = document.querySelector("#floatingPassword").value;
  const passwordCheck = document.querySelector("#floatingPasswordCheck").value;

  if (password === passwordCheck) {
    alert("As senhas conferem!");
  } else {
    alert("As senhas não conferem!");
  }
}

function toggleButtonTerms() {
  const checkbox = document.querySelector("#flexRadioDefault1");

  if (checkbox) {
    document.querySelector("#validateBtn").disabled = false;
    return;
  }

  document.querySelector("#validateBtn").disabled = true;
}
