$(document).ready(function(){

	//点击图片弹出选择文件的框框
	 // $('.name li img').click(function(){
	 // 	click();
	 // });
	 // function click(){
	 // 	$('input').trigger('click');
	 // };
	 //弹框结束
	 $('.div_02 .BB').click(function(){
		$('.div_02 ._01').toggle();
	});

	 $('.list li').eq(1).find('a').click(function(){
	 	// $('.list li').eq(1).children().removeClass();
	 	$(this).addClass('pay').siblings().removeClass();
	 });
	 $('.list li').eq(2).find('a').click(function(){
	 	// $('.list li').eq(1).children().removeClass();
	 	$(this).addClass('pay').siblings().removeClass();
	 });
	 $('.list li').eq(0).find('.month_02').click(function(){
	 	// $('.list li').eq(1).children().removeClass();
	 	$(this).addClass('month_01').siblings().removeClass('month_01');
	 	$(this).css('fontSize','15px').siblings().css('fontSize','');
	 });


	 // $($('.list li').eq(1).find('a'),$('.list li').eq(2).find('a')).on('click',function(){
	 // 	$(this).addClass('pay').siblings().removeClass();
	 // });

});