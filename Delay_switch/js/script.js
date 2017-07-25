window.onload = function(){
	
	var index = 0;//标签的索引
	var timer = null;//定时器

	var ul = document.getElementsByTagName("ul");
	var lis = ul[0].getElementsByTagName("li");
	var divs = document.getElementsByClassName("content");

	if (lis.length != divs.length) {
		return;
	}

	//遍历所有的页签
	for (var i = 0; i < lis.length; i++) {
		lis[i].id = i;
		lis[i].onmouseover = function(){
			//用that这个变量来引用当前滑过的li
			var that = this;
			//如果存在准备执行的定时器，立刻清除
			//只有当前停留时间大于500毫秒时才开始执行
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			//延迟半秒执行
			timer = /*window.*/setTimeout(function(){
				for (var j = 0; j < lis.length; j++) {
					lis[j].className = "";
					divs[j].style.display = "none";
				}
				//这里不直接使用this，是因为在这里的this指向的是windows对象
				lis[that.id].className = "selected";
				divs[that.id].style.display = "block";
			}, 500);
		};
	}
};