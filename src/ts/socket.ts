import { io, Socket } from "socket.io-client";

$(function () {
    const socket = io();

    socket.on('connect', function() {
        console.log('Connected!');
        $('#console').html('&#x200B;'); // Zero-width space
    
        socket.on('new_message', function(message) {
            console.dir(message);
            $('#console').append(`${message}\n`);
        });

        socket.emit('start', {});
    });

    $('#runAgainButton').on('click', function() {
        $('#console').html('&#x200B;'); // Zero-width space
        socket.emit('start', {});
    });
});