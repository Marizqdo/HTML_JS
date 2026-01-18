// Cambiar imagen gatos
const gatitosImg = document.querySelector('.gatitos');
const imagenes = ["gatitos.webp", "durmiendo.jpeg"]; // 
let indice = 0;

gatitosImg.addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    gatitosImg.src = imagenes[indice];
});

// Alerta Formulario
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('¡Gracias! Tu información ha sido enviada.');
    window.open('enviado.html', '_blank');
});

formulario.addEventListener('reset', () => {
    alert('Formulario borrado.');
});
