document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioReserva').addEventListener('submit', function(event) {

        Swal.fire({
            title: 'Estado del Vuelo',
            text: 'Tu vuelo aún está activo.',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    });
});
