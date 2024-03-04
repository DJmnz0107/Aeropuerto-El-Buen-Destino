document.addEventListener('DOMContentLoaded', function () {
    const btnConfirmar = document.querySelector('.btn-confirmar');

    btnConfirmar.addEventListener('click', function () {
        // Simulación de la obtención del estado del vuelo (puedes ajustar esto según tu lógica real)
        const estadoVuelo = obtenerEstadoVuelo();

        // Mostrar la alerta SweetAlert2 con el resultado
        mostrarAlerta(estadoVuelo);
    });

    function obtenerEstadoVuelo() {
        // Aquí puedes implementar la lógica real para obtener el estado del vuelo
        // Por ahora, simplemente devuelve un estado ficticio
        return 'Activo'; // Cambia esto según tus necesidades
    }

    function mostrarAlerta(estadoVuelo) {
        Swal.fire({
            icon: 'success',
            title: 'Estado del vuelo',
            text: `Su estado de vuelo está ${estadoVuelo}.`,
        });
    }
});