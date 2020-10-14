const MAX_X = 5;
const MIN_X = -3;

document.getElementById("graphic").onclick = function(event) {
	const rect = document.getElementById("graphic").getBoundingClientRect();

	var cordX;
	var cordY;
	if(!isNaN(r)){
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const r_pixels = 90;
		const centerX = 125;
		const centerY = 125;

		cordX = findNearest((x - centerX) * r / r_pixels);
		cordY = Math.min(Math.max(-(y - centerY) * r / r_pixels, -2.99999), 4.99999);
		cordY = cordY.toFixed(5);

		const resX = cordX * r_pixels / r + centerX;
		const resY = centerY - cordY * r_pixels / r;
	}
	else{
		$('#error').text("Укажите значение R");
	}

	let form = document.forms[0];
	window.onload = function () {
		form.reset(); //drop R on new page
	};


	form.elements.pointX.value = cordX;
	form.elements.pointY.value = cordY;
	form.elements.isFromGraphic.value = 1;
	if(isNaN(r)){
		$('#error').text("Укажите значение R");

	}
	else
	{
		form.submit();
	}

};

function findNearest(value) {
	value = (value>MAX_X) ? MAX_X : Math.round(value);
	value = (value<MIN_X) ? MIN_X : Math.round(value);

	return value;
}

function changeR(r) {
	$('.draw_r').text(r);
	$('.draw_-r').text(-r);
	$('.draw_half_r').text(r/2);
	$('.draw_-half_r').text(-r/2);
}

               