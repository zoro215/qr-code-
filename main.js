$(document).ready(function() {
    $('#generate').click(function() {
        var data = $('#data').val();
        $('#qrcode').empty(); // Эски QR кодни тозалаш
        $('#qrcode').qrcode(data);
    });
});