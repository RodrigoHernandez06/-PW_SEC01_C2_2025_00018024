var buttonReordenar = document.getElementById('reordenar');
var buttonCambiarTitulo = document.getElementById('cambiar-titulo');
var buttonCambiarSubtitulo = document.getElementById('cambiar-subtitulo');
var buttonAgregarImagen = document.getElementById('agregar-imagen');


buttonReordenar.addEventListener("click", () => {
    var contenidoParrafo = document.getElementById('contenido-parrafo');
    var parr1 = document.getElementById('cont-parr');
    contenidoParrafo.style.display = 'block';
    parr1.style.paddingBottom = '2%';
})

buttonCambiarTitulo.addEventListener("click", () => {
    var titulo = document.getElementById('titulo');
    titulo.innerText = 'Título cambiado';
    titulo.style.fontSize = '2em';
    titulo.style.marginTop = '0.67em';
    titulo.style.marginBottom = '0.67em';
    titulo.style.fontWeight = 'bold';
})  