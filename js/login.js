function login() {
  const pin = document.getElementById("pin").value;
  if (pin === localStorage.getItem("pin")) {
    loginOK();
    location.href = "panel.html";
  } else {
    alert("PIN incorrecto");
  }
}
