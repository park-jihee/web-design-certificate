$("ul.menu > li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});

$("ul.menu > li").mouseout(function(){
    $(this).children(".submenu").stop().slideUp();
});