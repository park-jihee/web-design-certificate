start();

var imgs = 2;
var now = 0;

function start(){
	$("#imgslide img").eq(0).siblings().css({"margin-left":"-2400px"});

	setInterval(function(){
		slide();
	},2000);
}

function slide(){
	now = now == imgs ? 0 : now += 1;
	$("#imgslide img").eq(now-1).css({"margin-left":"-2400px"});
	$("#imgslide img").eq(now).css({"margin-left":"0px"});
}