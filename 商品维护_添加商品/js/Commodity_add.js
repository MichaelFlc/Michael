$(document).ready(function(){

	$('.div_02 .BB').click(function(){
		$('.div_02 ._01').toggle();
	});

	$('.four_img').click(function(){
		// var idx=$('.four').index();
		// $('.four').index()=$('.five').index();
		// $('.five').index()=$(idx);
		$('.five').insertBefore($('.four'));
	});


});