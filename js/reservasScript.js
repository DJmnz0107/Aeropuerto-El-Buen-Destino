document.addEventListener('DOMContentLoaded', function () {
    const btnConfirmar = document.querySelector('.btn-confirmar');

    btnConfirmar.addEventListener('click', function () {
        var nombrePasajero = document.getElementById('nombrePasajero').value;

        const estadoVuelo = obtenerEstadoVueloAleatorio();

        mostrarAlerta(estadoVuelo, nombrePasajero);
    });

    function obtenerEstadoVueloAleatorio() {
        const random = Math.random();
        return random >= 0.5 ? 'activo' : 'cancelado';
    }

    function mostrarAlerta(estadoVuelo, nombrePasajero) {
        let icono = 'success'; 

        if (estadoVuelo === 'cancelado') {
            icono = 'error'; 
        }

        Swal.fire({
            icon: icono,
            title: 'Estado del vuelo',
            text: `¡Hola! ${nombrePasajero}, su vuelo está en estado ${estadoVuelo}.`,
        });
    }
});
