$(function(){
	$('.icoc2').click(function(){
		$('.qq').stop().animate({"left":"-200"});
		$('.icoc2').css({"display":"none"});
		$('.icoc3').css({"display":"block"});
	});
	$('.icoc3').click(function(){
		$('.qq').stop().animate({"left":"0"});
		$('.icoc2').css({"display":"block"});
		$('.icoc3').css({"display":"none"});
	});
	$('#ul1 li').click(function(){
		$(this).removeClass('cor1').addClass('cor2').siblings('li').removeClass('cor2').addClass('cor1');
		var index=$('#ul1 li').index(this);
		$('.mainRight').hide();
		$('.mainRight').eq(index+1).show().siblings('.mainRight').hide();
	});
	$('.tu').click(function(){
		var index=$('.tu').index(this);
		$('.mainRight').hide();
		$('.mainRight').eq(index+1).show();
		$('#ul1 li').eq(index).removeClass('cor1').addClass('cor2').siblings('li').removeClass('cor2').addClass('cor1');
	});
	$('.newsL').click(function(){
		$(this).parent().parent().hide().next().show();
	});
});