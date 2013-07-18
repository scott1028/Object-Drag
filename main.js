$.ui=function(el){
	return $(document.createElement(el)).css({display:'inline-block',width:600,height:400,backgroundColor:'silver'});
}

var stage=$.ui('div').css({position:'relative'}).appendTo(document.body);

var rect=$.ui('div').css({width:50,height:50,left:0,top:0,backgroundColor:'green',margin:50,position:'absolute'}).appendTo(stage);
rect.mousedown(function(e){
	// 計算偏差值
	var x=e.clientX-parseInt(this.style.left);
	var y=e.clientY-parseInt(this.style.top);

	$(document).mousemove(function(e){
		// 依照滑鼠當前座標扣除偏差值
		$(rect).css({
			left:e.clientX-x,
			top:e.clientY-y
		});
	});

	$(document).mouseup(function(e){
		$(document).unbind('mousemove');
	});

	$(rect).mouseout(function(e){
		//$(rect).unbind('mousemove');
	});
})