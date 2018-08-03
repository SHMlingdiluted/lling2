/***-----------电梯楼层导航--------------***/
function LiftEffect(json) {
	var array = [];
	for(var i =0; i<json.target.length;i++) {
		var t = $(json.target[i]).offset().top; //offset()偏移坐标
		array.push(t);//数组中添加新元素(array里面添加t)
	}
	
	function Selected(index) {
		$(json.control2).children().eq(index).addClass(json.current).siblings().removeClass(json.current);
	}
	
	$(window).on("scroll",Check);
	
	function Check() {
		var wst = $(window).scrollTop();//窗口的垂直滚动条位置
		if(wst >=$(json.target[0]).offset().top+100) {//滚动条位置大于等于.pr1的偏移坐标top值加上100
			$(json.control3).fadeIn(500); // #returnTop淡入
		}else {
			$(json.control3).fadeOut(500);
		};
		if(wst >= 80){ //窗口滚动条位置大于80px .areaName固定在顶部
			$(json.control1).addClass("fixTop");
		}else {
			$(json.control1).removeClass("fixTop");
		};
		
		var key = 0,
			flag = true;
		for(var i=0; i<array.length; i++) {
			key++;
			if(flag) {
				if(wst >=array[array.length-key]-300) {
					var index = array.length-key;
					flag = false;
				}else {
					flag = true;
				}
			}
		}
		Selected(index);
	}
	
	$(json.control2).children().on("click", function() {
		$(window).off("scroll");
		var index = $(this).index();
		Selected(index);
		
		var flag =true;
		for(var i=0; i<array.length; i++) {
			if(flag) {
				if(index == i) {
					$("html,body").stop().animate({
						"scrollTop": array[i]-96
					},500,function() {
						$(window).on("scroll",Check);
					});
					flag = false;
				}else {
					flag = true;
				}
			}
		}
	});
};