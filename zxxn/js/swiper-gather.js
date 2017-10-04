//首页焦点图轮播
$(function(){
	var mySwiper = new Swiper('.swiper-index .swiper-container',{
		autoplay : 300,
		loop : true,
		pagination : '.swiper-index .swiper-pagination',
		paginationClickable :true,
	})
})

$(document).ready(function(){
	var mySwiper = new Swiper('.sup-swiper .swiper-container',{
		autoplay:500,
		loop:true,
		pagination:'.sup-swiper .swiper-pagination',
		paginationClickable:true,
	})
});
