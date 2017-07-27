$(document).ready(function(){

	$('input').on('click',function(){
		$('input').css('boxShadow','');
		$(this).css('boxShadow','1px 1px 15px 1px #71B8FB');
	});

	$('input').keypress(function(event){
		if(event.keyCode==13){
			$('button').click();
		};
	})

	$('button').click(function(){
		if($('input').eq(0).val()==''||isNaN($('input').eq(0).val())||$('input').eq(0).val().length!=11){
			$('a').eq(1).addClass('mobile');
			$('a').eq(1).css('display','block');
			$('input').eq(0).css('border','2px solid #f00');
		}else{
			$('a').eq(1).css('display','none');
			$('input').eq(0).css('border','');
		}
	});

	// $('span').click(function(){
	// 	$.ajax({
	// 		url:'http://192.168.1.182:8080/yxjz/login/verifyCode',
	// 		type:'GET',
	// 		dateType:'image/jpeg',
	// 		data:({
	// 			'username':'user-manager',
	// 			'pwd':'user-manager'
	// 		}),
	// 		success:function(data){
	// 			$('span img').src='http://192.168.1.182:8080/yxjz/login/verifyCode';
	// 		}
	// 	});
	// });
	
		// function changeImg(){
		// 	$('span img').  
		// 	img.src = "http://192.168.1.182:8080/yxjz/login/verifyCode";
		// } 
		$('span img').click(function(){
			$(this).attr('src',"http://192.168.1.100:8080/yxjz/login/verifyCode?date=" + new Date());
		});

});