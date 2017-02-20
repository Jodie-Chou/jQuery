//根据浏览器大小设置页面主体大小
//1190px,990px;
function ini(){
	if ($(window).width()>1190) {
		$("body").attr("class","large");
	}else{
		$("body").attr("class","little");
	}
};
ini();
$(window).on("resize",ini);
