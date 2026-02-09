document.addEventListener("DOMContentLoaded", () => {
  const descripcion = localStorage.getItem("descripcionVet");

  // Web pública
  const descPublica = document.getElementById("descripcionPublica");
  if (descPublica && descripcion) {
    descPublica.textContent = descripcion;
  }

  // Panel médico
  const input = document.getElementById("descripcionInput");
  const preview = document.getElementById("previewDescripcion");

  if (input && preview) {
    if (descripcion) {
      input.value = descripcion;
      preview.textContent = descripcion;
    }

    input.addEventListener("input", () => {
      preview.textContent = input.value;
    });
  }
});

function guardarDescripcion() {
  const texto = document.getElementById("descripcionInput").value.trim();

  if (texto.length < 20) {
    alert("La descripción debe tener al menos 20 caracteres");
    return;
  }

  localStorage.setItem("descripcionVet", texto);
  alert("Descripción guardada correctamente ✔");
}
