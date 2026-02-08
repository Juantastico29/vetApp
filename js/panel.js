function volver() {
  window.location.href = "index.html";
}

function cerrar() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

// DESCRIPCIÓN
const textarea = document.getElementById("descripcion");
textarea.value = localStorage.getItem("descripcion") || "";

function guardarDescripcion() {
  localStorage.setItem("descripcion", textarea.value);
  alert("Descripción guardada");
}

// FOTO
const inputFoto = document.getElementById("foto");
const preview = document.getElementById("preview");

inputFoto.addEventListener("change", () => {
  const file = inputFoto.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    preview.src = reader.result;
  };

  reader.readAsDataURL(file);
});

function guardarFoto() {
  if (preview.src) {
    localStorage.setItem("foto", preview.src);
    alert("Foto guardada");
  }
}

// AGENDA
const lista = document.getElementById("listaHoras");
const horas = JSON.parse(localStorage.getItem("horas")) || [];

function renderHoras() {
  lista.innerHTML = "";
  horas.forEach((h, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${h}
      <button onclick="eliminarHora(${i})">❌</button>
    `;
    lista.appendChild(li);
  });
}

function eliminarHora(index) {
  horas.splice(index, 1);
  localStorage.setItem("horas", JSON.stringify(horas));
  renderHoras();
}

renderHoras();
