$(function(){

	$('.menu-icon').click(function() {
		if($('.modal-menu ul').hasClass('in')){
			$('.modal-menu ul').css('display', 'block');
			$('.modal-menu ul').removeClass('in');
		} else {
			$('.modal-menu ul').addClass('in');
			$('.modal-menu ul').css('display', 'none');
	
		};
	});
	
	});