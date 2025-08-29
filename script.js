document.addEventListener('DOMContentLoaded', function() {  
    const buttonReordenar = document.getElementById('reordenar');
    const buttonCambiarTitulo = document.getElementById('cambiar-titulo');
    const buttonCambiarSubtitulo = document.getElementById('cambiar-subtitulo');
    const buttonAgregarImagen = document.getElementById('agregar-imagen');
   
    buttonReordenar.addEventListener("click", () => {
        var contenidoParrafo = document.getElementById('contenido-parrafo');
        var parr1 = document.getElementById('cont-parr');
        contenidoParrafo.style.display = 'block';
        parr1.style.paddingBottom = '2%';
    })

    buttonCambiarTitulo.addEventListener("click", () => {
        const nuevoTitulo = prompt('Ingrese el nuevo título:', titulo.textContent);
        if (nuevoTitulo !== null && nuevoTitulo.trim() !== '') {
        titulo.textContent = nuevoTitulo.trim();
        }
        titulo.style.fontSize = '2.5em';
        titulo.style.fontWeight = 'bold';
    })  

    buttonCambiarSubtitulo.addEventListener("click", () => {
        var descHdr = document.getElementById('desc-hdr');
        var descParr = document.getElementById('desc-parr');

        descHdr.style.color = 'blue';
        descParr.style.fontFamily = 'comic sans ms';
        descParr.style.font = 'italic';
    })

    buttonAgregarImagen.addEventListener("click", () => {
        var datosLibro = document.getElementById('datos-libro');
        var img = document.createElement('img');
        img.src = 'https://i1.sndcdn.com/artworks-vfoGbMzJtw2GXsY6-rKfh6Q-t500x500.jpg';
        img.alt = 'Imagen del libro';
        img.style.width = '150px'; 
        datosLibro.appendChild(img);
        buttonAgregarImagen.disabled = true;
    }
    )
});