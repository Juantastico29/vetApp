if (!isLogged()) location.href = "login.html";

// Foto
fotoInput.onchange = e => {
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("fotoPerfil", reader.result);
    preview.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

// Descripción
descEdit.value = localStorage.getItem("descripcion") || "";

function guardarDesc() {
  localStorage.setItem("descripcion", descEdit.value);
  alert("Descripción guardada");
}

// PIN
function cambiarPIN() {
  const nuevo = pinNuevo.value;
  if (nuevo.length < 4) return alert("PIN mínimo 4 dígitos");
  localStorage.setItem("pin", nuevo);
  alert("PIN actualizado");
}

// Citas
const lista = document.getElementById("lista");
const citas = JSON.parse(localStorage.getItem("citas") || "[]");

citas.forEach((c, i) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <b>${c.tutor}</b> - ${c.mascota} (${c.tipo})
    <br>${c.fecha} ${c.hora}
    <button onclick="borrar(${i})">❌</button>
  `;
  lista.appendChild(div);
});

function borrar(i) {
  citas.splice(i,1);
  localStorage.setItem("citas", JSON.stringify(citas));
  location.reload();
}
