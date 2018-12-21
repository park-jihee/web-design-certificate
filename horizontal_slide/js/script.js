var move = 0;
var cnt = 0;

setInterval(function(){
    document.getElementById("slide").style.left = -move + 'px';
    move += 1000;
    cnt++;
    if(cnt >= 3){
        move = 0;
        cnt = 0;
    }
}, 2000);