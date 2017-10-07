$(function() {
	 $(".z-btn span").bind("touchstart", function() {
    	$(this).css({"background" : "#ffa851", "color": "#fff"})
    })
	 $(".z-btn span").bind("touchend", function() {
    	$(this).css({"background" : "#fff", "color": "#000"})
    })
    var City = ["全部","长沙", "深圳"]
    for(var i = 0; i < City.length; i++) {
          $(".z-city div").append("<span class='z-sel-city'>" + City[i] + "</span>")
    }
    $(".z-city div span").eq(0).css({"color" : "#fff", "background" : "#ff9f40"});
    var Zarea = [['全部','长沙','深圳'],['全部','芙蓉区','雨花区','天心区','岳麓区','长沙县','开福区','望城县'],['全部','罗湖区','福田区','南山区','保安区','龙岗区','盐田区','龙华新区','光明新区','大鹏新区']];
    $(".z-city div ").delegate("span[class = 'z-sel-city']","tap", function() {
         $(".z-area div").html("")
        $(this).css({"background" : "#ff9f40", "color" : "#fff"}).siblings().css({"background" : "#e9e9e9", "color" : "#757575"});
        for(var i = 0; i < Zarea[$(this).index()].length; i++) {
        $(".z-area div").append("<span>" + Zarea[$(this).index()][i] + "</span>")
        }
         $(".select-box section div span").tap(function() {
            $(this).css({"background" : "#ff9f40", "color" : "#fff"}).siblings().css({"background" : "#e9e9e9", "color" : "#757575"})
        })
    })
    for(var i = 0; i < Zarea[0].length; i++) {
        $(".z-area div").append("<span>" + Zarea[0][i] + "</span>")
    }
    $(".z-area div span").eq(0).css({"color" : "#fff", "background" : "#ff9f40"});
    $(".z-area div span, .z-hous span").tap(function() {
        $(this).css({"background" : "#ff9f40", "color" : "#fff"}).siblings().css({"background" : "#e9e9e9", "color" : "#757575"})
    })
    // 工地直播菜单切换
    $(".z-live-header span").tap(function(event) {
        $(".mask").show();
        $('html').toggleClass('alpha');
        $(this).css({"color" : "#ff9f40"}).siblings().css({"color" : "#4d4d4d"});
        $(this).children("i").css({"background" : "url('../img/tip2.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(0deg)"}).parent().siblings().children("i").css({"background" : "url('../img/tip1.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(180deg)"});
        $(".z-selected div").eq($(this).index()).show().siblings().hide();
    })
    // 点击确定
    $(".z-live-btn").tap(function() {
        $(".z-ranking, .mask").hide();
        $('html').toggleClass('alpha');
        $(".z-live-header span").css({"color" : "#4d4d4d"}).children("i").css({"background" : "url('../img/tip2.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(180deg)"}).parent().siblings().children("i").css({"background" : "url('../img/tip1.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(0deg)"});
    })
    $(".z-selected ul li").tap(function() {
        $(this).css({"color" : "#ff9f40"}).siblings().css({"color" : "#4d4d4d"})
        $(".z-selected>div, .mask").hide();
        $('html').toggleClass('alpha');
        $(".z-live-header span").css({"color" : "#4d4d4d"}).children("i").css({"background" : "url('../img/tip2.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(0deg)"}).parent().siblings().children("i").css({"background" : "url('../img/tip1.png') center center no-repeat", "background-size" : "100%"});
    })
    // 页面到底部自动加载
    var _h = $(window).height();
    $(window).scroll(function(){
      var fh = $(".footer").scrollTop();
    　　var scrollTop = $(this).scrollTop(),
            scrollHeight = $(document).height(),
            windowHeight = $(this).height();
        if (scrollTop>_h){  
            $("#scrolltop").show();  
        }else{  
            $("#scrolltop").hide();  
        }
    });
    $(window).scroll(function(event) {
        /* Act on the event */
        var scrollTop = $(this).scrollTop() , scrollHeight = $(document).height(),windowHeight = $(this).height();
        if(scrollHeight < 15000) {
            if(scrollTop + windowHeight >= scrollHeight-50) {
                // $("#pulladd").hide();
                $("#addmore").show();
                $.ajax({
                    url: 'ajaxRequestData/cool.html',
                    type: 'get',
                    success: function(data) {
                        for(var i = 0; i < 2; i++){
                            $(".z-live-cont").append(data);
                        }
                    }
                });
            }
        } else {
             $("#addmore").hide();
        }
    })
    // 写评论
    $(".z-write").tap(function() {
        $(".z-write-com").show();
        $(".z-sy-footer").hide();
    })
    // 点击发布
     $(".z-btn-yes").tap(function() {
        if($(".z-write-com textarea").val() == "") {
            $(".z-write-com i").html("内容不能为空");
             $(".z-write-com").show();
        } else {
            $(".z-write-com").hide().children('i').html("");
            $(".z-write-com strong em").html(500);
            $(".z-say-main").append("<dl class='z-says clearfix'><dt><a href='#'><img src='../img/says_03.png' alt=''></a></dt><dd><h3>鲁班大神<em>36F</em></h3><p>"+$('.z-textarea').val()+"</p><span>刚刚<i></i><em>0</em></span></dd></dl>")
            $(".z-write-com textarea").val("");
            $(".z-sy-footer").show();
        } 
    })
    
     // 点赞
     $(".swiper-slide span").tap(function() {
        if($(this).hasClass('z-wei')){
            $(this).removeClass('z-wei').html(parseInt($(this).html())-1).css({"backgroundColor" : "#ffa851"});
            yougood = false;
        } else {
            $(this).addClass('z-wei').html(parseInt($(this).html())+1).css({"backgroundColor" : "#e0872e"});
             yougood = true;
        }
        
     })
     // keyup事件
     $(".z-write-com textarea").keyup(function() {
        var keynum = 500-$(this).val().length;
        console.log(keynum)
        $(".z-write-com strong em").html(keynum)
        if(keynum <= 0) {
            $(".z-write-com strong em").css({"color" : "red"})
        }
     })
     // 点击空白处消失
    $(document).bind("tap",function(e){
        var target = $(e.target);
         if(target.closest($(".z-write-com")).length == 0){
            $(".z-write-com").hide().children('textarea').val("");
            $(".z-sy-footer").show();
            $(".z-write-com i").html("");
        }
    })
    // 服务报告
    // 点赞
    $(".s-laud").tap(function() {
        if($(this).hasClass('s-top')) {
            $(this).css({"backgroundColor" : "#e89849"}).removeClass('s-top').children('em').html(parseInt($(this).children('em').html())+1)
        } else {
            $(this).css({"backgroundColor" : "#ffa751"}).addClass('s-top').children('em').html(parseInt($(this).children('em').html())-1)
        }
        
    })
    // 点击蒙版关闭
    $(".mask").tap(function(){
        $(this).hide();
        $(".z-selected>div").hide();
         $(".z-live-header span").css({"color" : "#4d4d4d"}).children("i").css({"background" : "url('../img/tip2.png') center center no-repeat", "background-size" : "100%","-webkit-transform" : "rotate(0deg)"}).parent().siblings().children("i").css({"background" : "url('../img/tip1.png') center center no-repeat", "background-size" : "100%"});

    })

// 事件委托
var see = $("#see");
var scc = $(".s-review ");
Top(see,"em","z-tops");
Top(scc,"i","s-tops");
function Top(name,biao,han) {
    name.click(function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if(target.nodeName.toLowerCase() == biao){
        var nums = parseInt(target.innerHTML);
           if(target.className != han ) {
                target.className = han;
                nums++;
            } else {
                 target.className = ""
                 nums--;
            }
                target.innerHTML = nums;
        }
    })
}
// 服务报告
    $(document).bind("click",function(e){
        var target = $(e.target);
         if(target.closest($(".k-write-com")).length == 0){
            $(".k-write-com").hide().children('textarea').val("");
            $(".k-sy-footer").show();
            $(".k-write-com i").html("");
        }
    })
})