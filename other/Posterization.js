// Posterization.js
function start() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.onload = function() {
	context.drawImage(image, 0, 0);
	var imageData = context.getImageData(0, 0, image.width, image.height);
	// posterization
	var length = imageData.data.length;
	var pixel = imageData.data;

	var q = 5; // posterize step	
	for (var i = 0; i < length; i += 4) {
	    for (var j = 0; j < 3; j++){ // RGB
		//posterization process
		for (var s = 0; s < q; s++){
		    var t1 = s * Math.floor(255 / q);
		    var t2 = (s + 1) * Math.floor(255 / q);
		    if (t1 <= pixel[i + j] && pixel[i + j] < t2){
			pixel[i + j] = (t1 + t2) / 2;
		    }
		}		
	    }
	}
	context.putImageData(imageData, 0, 0);
    };
    // load image via browser
    image.src = '../img/sky.png';
}
