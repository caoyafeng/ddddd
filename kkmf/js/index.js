$(function(){
	var key = 0;
	var prev = 0;
	out();
	//滑轮滚动事件
	$(document).mousewheel(function(event,delta){
		if(!$('.wrapBox').is(':animated')){
			key = key - delta;
			if(key<0){
				key = 0;
			}else if(key>3){
				key = 3;
			}
			$('.wrapBox').stop(true).animate({top:-key*100+'%'},1000);
			$('.nav li').eq(key).addClass('current').siblings().removeClass('current');
			
		}
		out();
		prev = key;
	});
	var arr = ['首页','我要买房','转让市场','我的项目',];
	//bind绑定事件
	$('.nav li').bind({
		mouseenter:function(){
			$(this).append('<span>'+arr[$(this).index()]+'</span>');
		},
		mouseleave:function(){
			$(this).find('span').remove();
		},
		click:function(){
			key = $(this).index();
			$('.wrapBox').stop(true).animate({top:-key*100+'%'},1000);
			$(this).addClass('current').siblings().removeClass('current');
			out();
			prev = key;
		}
		
	});
	function out(){
		$('.box').eq(prev).addClass('comeout');
		$('.box').eq(key).removeClass('comout');
	}
});
