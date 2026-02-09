function agendar() {
  const cita = {
    tutor: tutor.value,
    mascota: mascota.value,
    tipo: tipo.value,
    fecha: fecha.value,
    hora: hora.value
  };

  const citas = JSON.parse(localStorage.getItem("citas") || "[]");
  citas.push(cita);
  localStorage.setItem("citas", JSON.stringify(citas));

  const msg =
    `Hola, soy ${cita.tutor}. Mascota: ${cita.mascota} (${cita.tipo}). Fecha ${cita.fecha} a las ${cita.hora}`;

  window.open(
    `https://wa.me/56996561680?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
