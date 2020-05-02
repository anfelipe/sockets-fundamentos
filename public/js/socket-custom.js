var socket = io();

socket.on('connect', function() {
    console.log('Online');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Offline');
});

//Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta:', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});