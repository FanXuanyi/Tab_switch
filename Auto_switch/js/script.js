window.onload = function () {

	var index = 0;
	var timer = null;

	//获取所有的页签和要切换的内容
	var ul = document.getElementsByTagName("ul");
	var titles = ul[0].getElementsByTagName("li");
	var divs = document.getElementsByClassName("content");

	//解决由于定时器的延迟导致的自动切换与滑动切换间跳动的问题
	//判断当前是否有等待的计时器，有就清掉
	if (timer) {
		clearInterval(timer);
		timer = null;
	}

	//添加定时器，自动切换
	timer = setInterval(autoPlay, 2000);

	function autoPlay(){
		index++;
		if (index >= titles.length) {
			index = 0;
		}
		changeOption(index);
	}

	//手动切换
	for (var j = 0; j < titles.length; j++) {
		titles[j].id = j;
		titles[j].onmouseover = function () {
			clearInterval(timer);
			changeOption(this.id);
		}
		titles[j].onmouseout = function(){
			timer = setInterval(autoPlay, 2000);
		};
	}

	function changeOption (curIndex) {
		for (var i = 0; i < titles.length; i++) {
			titles[i].className = "";
			divs[i].style.display = 'none'
		}
		titles[curIndex].className = "selected";
		divs[curIndex].style.display = "block";
		index = curIndex;
	}


};
