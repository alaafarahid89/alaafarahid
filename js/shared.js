$(document).ready(function(){
    $('.middle').on( "mousemove", function( event ) {
        var width = event.pageX - $(this).offset().left;
        $('.after').css("width", width).show();
 	});
});