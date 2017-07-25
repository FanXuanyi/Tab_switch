window.onload = function(){

	//获取鼠标滑过的标签和要切换内容的元素
	var ul = document.getElementsByTagName("ul");
	var titles = ul[0].getElementsByTagName("li");
	var divs = document.getElementsByClassName("content");

	//判断标题的个数与内容类别的个数是否相等
	if (titles.length != divs.length) {
		return;
	}

	//遍历titles下的ul下的所有li
	for (var i=0;i<titles.length;i++) {
		titles[i].id = i;
		//如果是点击切换就将onmouseover换成onclick
		titles[i].onmouseover = function(){
			//清除所有li上的class
			for (var j=0;j<titles.length;j++){
				titles[j].className = "";
				divs[j].style.display = "none";
			}
			//设置当前为高亮显示
			this.className = "selected";//this指代鼠标指向的对象
			divs[this.id].style.display = "block";
		};
	}
};