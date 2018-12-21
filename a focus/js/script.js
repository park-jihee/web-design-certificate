$("a").focusin(function(A){
    $(this).css({"color":"red"});
});

$("a").focusout(function(A){
    $(this).css({"color":"inherit"});
});