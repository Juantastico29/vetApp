// Mostrar foto guardada (panel y web)
document.addEventListener("DOMContentLoaded", () => {
  const foto = localStorage.getItem("fotoPerfil");

  if (foto) {
    const imgPanel = document.getElementById("previewFoto");
    const imgPublica = document.getElementById("fotoPublica");

    if (imgPanel) imgPanel.src = foto;
    if (imgPublica) imgPublica.src = foto;
  }
});

// Vista previa
function previewFoto(event) {
  const reader = new FileReader();

  reader.onload = () => {
    document.getElementById("previewFoto").src = reader.result;
  };

  reader.readAsDataURL(event.target.files[0]);
}

// Guardar foto
function guardarFoto() {
  const img = document.getElementById("previewFoto").src;

  if (!img) {
    alert("Selecciona una imagen");
    return;
  }

  localStorage.setItem("fotoPerfil", img);
  alert("Foto guardada correctamente ✔");
}
