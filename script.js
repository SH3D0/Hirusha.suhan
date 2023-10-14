document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of opening the link

    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    var image = document.createElement('img');
    image.src = 'whatsapp-image.jpg'; // Replace with your image file
    overlay.appendChild(image);

    overlay.addEventListener('click', function() {
        overlay.remove();
    });
});