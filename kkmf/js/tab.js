
$('document').ready(function(){
	var length, 
		interval, 
		currentIndex = 0,
		hasStarted = false;
		length = $('.show').length
	/* $(".slider3-nav li").each(function(){
	 	$(this).click(function(){
	 		if(!$(this).hasClass('slider-item')){
	 			$(this).addClass('slider-item').siblings('.slider-item').removeClass('slider-item');
	 		}else{
	 			$(this).siblings('.slider-item').removeClass('.slider-item');
	 		}
	 		var target = $(this).attr("name");
	 		$(this).css("background-color","#ccc");
	 	
	 		$(this).siblings().css("background-color","transparent");
	 		$("."+target).show();
	 		$('.'+target).siblings().hide();
	 	})
	 })*/
	 //轮播到下一个导航随同
	 function tab(){
	 	if(!hasStarted){
	 		hasStarted = true;
	 		interval = setInterval(next,1000);
	 		console.log(interval)
	 	}
	}
	 function next(){
	 	 var preIndex = currentIndex; 
		  currentIndex = ++currentIndex % length; 
		  play(preIndex, currentIndex); 
	}
	 
	function play(preIndex,currentIndx){
		//console.log( $('.show').eq(preIndex));
		 $('.show').eq(preIndex).hide().parent().children().eq(currentIndex).show(); 
		 $('.slider-item').removeClass('slider-item');
		 $('.slider3-nav li').parent().children().eq(currentIndex).addClass('slider-item');
		 $('.slider-item').css('background-color','#ccc');
		 $('.slider-item').siblings().css("background-color","transparent");
		 
	/*	var check;
		if (check.index() == 3) {
			lis.first().addClass("checked");
			check.removeClass("checked");
		}else{
			check.next().addClass("checked");
			check.removeClass("checked");
		}*/
		
	}
	//停止
	function stope(){
		console.log(interval)
		clearInterval(interval);
		hasStarted = false;
	}
	//鼠标上悬时停止滑动，鼠标离开时，开始滑动
	$('.home-mask').hover(function() {
		  stope(); 
		}, function() { 
		tab(); 
		 }); 
	//鼠标上悬到导航时立刻滑动到当前页面，并且停止滑动，鼠标离开时，按循序开始滑动	
    $('.slider3-nav li').hover(function() { 
		  stope(); 
		  var preIndex = $(".slider3-nav li").filter(".slider-item").index(); 
		  currentIndex = $(this).index(); 
		  play(preIndex, currentIndex); 
		 }, function() { 
		  tab(); 
		 });
    //开始轮播
	tab(); 
})


