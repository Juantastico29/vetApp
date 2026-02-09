function toggleDark() {
  document.body.classList.toggle("dark");

  // guardar preferencia
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

// cargar preferencia al iniciar
if (localStorage.getItem("darkmode") === "on") {
  document.body.classList.add("dark");
}
