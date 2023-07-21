$(document).ready(function(){
    $('.click_once').on('click', function(){
    $('.paragraph').fadeIn().dealy(1000).fadeOut();
});
    $('.click_twice').on('dblclick', function(){
    $('.paragraph').fadeIn().dealy(1000).fadeOut();
});
    $('.hover').hover(
        function(){
            $('.paragraph').fadeIn();
        },
        function() {
            $('.paragraph').fadeOut();
        });
});