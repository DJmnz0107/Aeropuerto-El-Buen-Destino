const Boton = document.querySelector('.barra')
const BotonIcono = document.querySelector('.barra i')
const BarraDeslizable = document.querySelector('.menudeslizable')

Boton.onclick = function () {
    BarraDeslizable.classList.toggle('open')
    const isOpen = BarraDeslizable.classList.contains('open')

    BotonIcono.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const barraDeslizable = document.querySelector('.menudeslizable');
    const botonIcono = document.querySelector('.barra i');
    
    if (screenWidth > 576) { 
        barraDeslizable.classList.remove('open');
        botonIcono.classList = 'fa-solid fa-bars'; 
    }
});
