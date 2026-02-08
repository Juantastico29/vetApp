function agendar() {
  const tutor = tutor.value;
  const mascota = mascota.value;
  const fecha = fecha.value;
  const hora = hora.value;

  if (!tutor || !fecha || !hora) return alert("Completa todo");

  const cita = { tutor, mascota, fecha, hora };

  const citas = JSON.parse(localStorage.getItem("citas")) || [];
  citas.push(cita);
  localStorage.setItem("citas", JSON.stringify(citas));

  const msg = `Hola, quiero agendar:\nTutor: ${tutor}\nMascota: ${mascota}\nFecha: ${fecha}\nHora: ${hora}`;
  window.open(`https://wa.me/56996561680?text=${encodeURIComponent(msg)}`);
}
