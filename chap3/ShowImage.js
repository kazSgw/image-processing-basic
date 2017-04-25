// ShowImage.js
function start() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    // event handler setting
    image.onload = function() {
	context.drawImage(image, 0, 0);
    };
    // load image via browser
    image.src = 'sky.png';
}
