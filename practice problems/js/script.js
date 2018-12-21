// a 태그 포커스 인/아웃 스타일 변경

$('a').focusin(function(A){ // a 태그에 포커스가 맞춰질 경우 A를 실행한다.
    $(this).css('color','#f00');
}); //현재 태그의 css color 값을 #f00으로 설정한다

$('a').focusout(function(A){ // a 태그가 포커스에서 벗어날 경우 A를 실행한다.
    $(this).css('color','inherit');
}); //현재 태그의 css color 값을 상위 태그의 color와 동일하게 설정한다.


// 메뉴 클릭 시 슬라이드 다운/업
$('ul.menu > li').mouseover(function(){
    //현재 선택된 요소를 down해서 보여준다
    $(this).children('.submenu').stop().slideDown();
});

$('ul.menu > li').mouseout(function(){
    //현재 선택된 요소를 down해서 숨긴다
    $(this).children('.submenu').stop().slideUp();
});


// modal 팝업
$('.partner_logo img').click(function(){
    // partner 이미지들이 클릭되었을 때 modal을 보여준다
    $('.modal').show();
});

$('.modal .modal_box button').click(function(){
    // modal창의 닫기버튼을 클릭 시 modal을 숨긴다
    $('.modal').hide();
});


// 2초마다 슬라이드 변경