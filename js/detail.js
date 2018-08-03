$(function () {
	//商品、详情、评价滑动切换
	var swiper1 = new Swiper("#container",{
		autoHeight:true,//高度随内容变化
		onSlideChangeEnd: function(swiper1){
			var tabIndex = swiper1.activeIndex; //切换结束时，告诉我现在是第几个slide
			//0商品、1详情、2评价
			$(".item li").removeClass("active");
			$($(".item li")[tabIndex]).addClass("active");
			//将页面滚动条移到顶部
			window.scrollTo(0,0-document.body.scrollHeight);
		}
	});
	
	//产品展示图片切换
	var swiper = new Swiper("#img-scroll", {
	    pagination: ".swiper-pagination",
		paginationType: "fraction",
		nested: true,//子模块滑动式停止父模块的滑动
		resistanceRatio: 0,//边缘抵抗力
 	});
		    
	//点击商品、详情、评价标签切换
	$(".item li").click(function() {
		n = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		swiper1.slideTo(n, 1000, true);
	});
	
	//数量 减
	$(".minus").click(function () {
		var n = $(this).parent().find(".num");
		n.val(parseInt(n.val()) - 1);
		if (n.val() <= 1) {
			n.val(1);
			$(this).addClass("gray");
		}
	});
	//数量 加
	$(".plus").click(function () {
		var n = $(this).parent().find(".num");
		n.val(parseInt(n.val()) + 1);
		$(this).siblings(".minus").removeClass("gray")
	});
	
	//点击性能参数
    $(".pro-parameter").click(function () {
        $(".item li:eq(1)").click();
    });
    
    //点击合作条款
    $(".coop-terms,.iframe-mask,.close").click(function () {
    	$(".iframe").slideToggle()
    });
	
	//点击评价
    $(".pro-comment .inner,.all-comment").click(function () {
        $(".item li:eq(2)").click();
    });
    
    //商品规格售后切换
	var swiper2 = new Swiper("#detail", {
		autoHeight:true,//高度随内容变化
		onSlideChangeEnd: function(swiper2){
			var tabIndex = swiper2.activeIndex; //切换结束时，告诉我现在是第几个slide
			//0商品、1详情、2评价
			$(".tab span").removeClass("active");
			$($(".tab span")[tabIndex]).addClass("active");
		},
		nested:true,//子模块滑动式停止父模块的滑动
		resistanceRatio: 0,//边缘抵抗力
	});
    //点击商品、规格参数、包装售后标签切换
	$(".tab span").click(function() {
		n = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		swiper2.slideTo(n, 1000, true);
	});
    
})