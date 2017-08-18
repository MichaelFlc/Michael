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


	//点击图片弹出选择文件的框框
	 // $('.name li img').click(function(){
	 // 	click();
	 // });
	 // function click(){
	 // 	$('input').trigger('click');
	 // };
	 //弹框结束
	 
	 $('.manager table tr').eq(1).find('td').eq(4).find('a').eq(2).click(function(){
	 	$('.background').css('display','block');
	 	$('.select').css('display','block');
	 });
	 $('.cancel').click(function(){
	 	$('.background').css('display','');
	 	$('.select').css('display','');
	 });
	 $('.confirm').click(function(){
	 	$('.manager table tr').eq(1).css('display','none');
	 	$('.background').css('display','none');
	 	$('.select').css('display','none');
	 });

});