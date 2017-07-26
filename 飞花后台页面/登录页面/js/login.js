$(document).ready(function(){

	$('input').on('click',function(){
		$('input').css('boxShadow','');
		$(this).css('boxShadow','1px 1px 15px 1px #71B8FB');
	});
	$('button').click(function(){
		if($('input').eq(0).val()==''||!isNum($('input').eq(0).val())||$('input').eq(0).val().length!=11){
			alert('您输入的不是数字或者位数少于11位或者为空');
		};
	});




});