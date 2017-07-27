$(document).ready(function(){
	// $('.ipt_01').click(function(){

	// });
	$('button').click(function(){
		if($('.ipt_01').val()==''||$('.ipt_01').val().length!=11||isNaN($('.ipt_01').val())){
			$('a').eq(1).addClass('aa');
			$('a').eq(1).css('display','block');
		}else{
			$('a').eq(1).css('display','none');
		}

	});
});