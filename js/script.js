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