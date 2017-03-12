var prev = document.getElementById("prev");
var next = document.getElementById("next");
var c3_a = document.getElementsByClassName("c3_a")[0];
var _bottom = document.getElementsByClassName("bottomline")[0];
var oItem = document.getElementsByClassName("item")[0];
//console.log(c3_a);
next .onclick = function(){
	c3_a.style.left = -1110+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
prev .onclick = function(){
	c3_a.style.left = 0+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
//console.log(oItem.offsetWidth);
var oItem_h=oItem.getElementsByTagName("a")[0].offsetWidth;
//console.log(oItem.getElementsByTagName("a")[0].offsetWidth);
oItem.onmouseover = function(){
	
				move(_bottom,{"width":oItem_h});
			}
			oItem.onmouseout = function(){
				move(_bottom,{"width":"0"});

			}