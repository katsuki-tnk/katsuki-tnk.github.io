$(function(){

$(window).on('scroll', function(){
	var herobottom = $('.hero').height();
	if($(window).scrollTop()>herobottom){
		$('.header-wrapper').addClass('fixed');
	}else{
		$('.header-wrapper').removeClass('fixed');
	}
});

$(window).trigger('scroll');

	
});