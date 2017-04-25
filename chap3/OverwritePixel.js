// OverwritePixel.js
function start() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    // event handler setting
    image.onload = function() {
	context.drawImage(image, 0, 0);
	// output top-left RGBA
	var imageData = context.getImageData(0, 0, image.width, image.height);
	// turn pixel color to green (top area :10 * width)
	var width = 4 * imageData.width;
	var height = 10 // 10px from top
	for (var i=0; i<width * height; i+=4) {
	    imageData.data[i + 0] = 0;   // R
	    imageData.data[i + 1] = 255; // G
	    imageData.data[i + 2] = 0;   // B
	    imageData.data[i + 3] = imageData.data[i + 3]; // A (do nothing)
	}
	context.putImageData(imageData, 0, 0);
    };
    // load image via browser
    image.src = 'sky.png';
}
