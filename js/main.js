function toggleButton() {
    const checkbox = document.getElementById('checkAutorizacion');
    const submitButton = document.getElementById('submitButton');
    
    if (checkbox.checked) {
      submitButton.classList.remove('button-disabled');
      submitButton.disabled = false;
    } else {
      submitButton.classList.add('button-disabled');
      submitButton.disabled = true;
    }
  }

  function submitForm() {
    alert('Formulario enviado');
    // Aquí puedes agregar la lógica para enviar el formulario
  }

function abrirPdfPolitica() {
  window.open('./doc/Politica tratamiento de datos personales.pdf', '_blank'); // Cambia 'ruta/al/archivo.pdf' por la ubicación de tu archivo PDF
}

function abrirPdfAutorizacion() {
  window.open('./doc/Autorizacion datos personales.pdf', '_blank'); // Cambia 'ruta/al/archivo.pdf' por la ubicación de tu archivo PDF
}