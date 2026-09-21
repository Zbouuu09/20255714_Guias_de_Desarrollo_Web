'use strict';
const form = document.querySelector('#consulta');
if (form) {
  const room = new URLSearchParams(location.search).get('habitacion');
  const select = form.elements.habitacion;
  if ([...select.options].some(option => option.value === room)) select.value = room;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Nombre: ${data.get('nombre')}\nCorreo: ${data.get('correo')}\nInterés: ${data.get('habitacion')}\nConsulta: ${data.get('mensaje')}`;
    document.querySelector('#resumen').textContent = message;
    document.querySelector('#resultado').hidden = false;
    document.querySelector('#resultado').focus();
  });
  form.addEventListener('reset', () => { document.querySelector('#resultado').hidden = true; });
}
const slider = document.querySelector('#duracion');
if (slider) {
  const sample = document.querySelector('#muestra');
  const replay = () => {
    sample.classList.remove('entrada');
    void sample.offsetWidth;
    sample.style.setProperty('--duracion-entrada', `${slider.value}ms`);
    sample.classList.add('entrada');
  };
  slider.addEventListener('input', () => {
    document.querySelector('#valor-duracion').textContent = `${slider.value} ms`;
    document.querySelector('#codigo-duracion').textContent = `--duracion-entrada: ${slider.value}ms;`;
  });
  slider.addEventListener('change', replay);
  document.querySelector('#repetir').addEventListener('click', replay);
}
