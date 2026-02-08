const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
      tutor: tutor.value,
      mascota: mascota.value,
      fecha: fecha.value,
      hora: hora.value
    };

    let horas = JSON.parse(localStorage.getItem("horas")) || [];
    horas.push(data);
    localStorage.setItem("horas", JSON.stringify(horas));

    const msg = `Hola, quiero agendar hora:\nTutor: ${data.tutor}\nMascota: ${data.mascota}\nFecha: ${data.fecha}\nHora: ${data.hora}`;
    window.open(`https://wa.me/56996561680?text=${encodeURIComponent(msg)}`);

    mensaje.innerText = "✅ Hora solicitada";
    form.reset();
  });
}

window.onload = () => {
  if (localStorage.getItem("fotoPerfil")) {
    fotoPublica.src = localStorage.getItem("fotoPerfil");
  }
  if (localStorage.getItem("descripcion")) {
    descripcionPublica.innerText = localStorage.getItem("descripcion");
  }
};
