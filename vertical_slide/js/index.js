var imgs = $("#imgslide img");
var last = imgs.length - 1;
var n = 0;

$(imgs[n]).siblings("img").css("bottom", "-600px");

function slide() {
	$(imgs[n]).animate({
		"bottom": 600
	}, 2000, function () {
		$(this).css({ "bottom": -600, "left": 0 });
	});

	n++;
	if (n > last) n = 0;

	$(imgs[n]).animate({
		"bottom": "0",
		"left": "0"
	}, 2000);
}
var st = setInterval(slide, 2000);

