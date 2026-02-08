const PIN_CORRECTO = localStorage.getItem("pinMedico") || "1234";

function login() {
  const pin = document.getElementById("pin").value;

  if (pin === PIN_CORRECTO) {
    localStorage.setItem("auth", "true");
    location.href = "panel.html";
  } else {
    error.innerText = "❌ PIN incorrecto";
  }
}
