document.addEventListener("DOMContentLoaded", () => {

  const PIN_CORRECTO = "1234"; // cámbialo después

  const btn = document.getElementById("btnIngresar");

  btn.addEventListener("click", () => {
    const pin = document.getElementById("pin").value;
    const error = document.getElementById("error");

    if (pin === PIN_CORRECTO) {
      localStorage.setItem("auth", "true");
      window.location.href = "panel.html";
    } else {
      error.textContent = "❌ PIN incorrecto";
    }
  });

});
