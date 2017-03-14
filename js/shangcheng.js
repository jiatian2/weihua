var prev = document.getElementById("prev");
var next = document.getElementById("next");
var prev1 = document.getElementById("prev1");
var next1 = document.getElementById("next1");
var prev2 = document.getElementById("prev2");
var next2 = document.getElementById("next2");
var prev3 = document.getElementById("prev3");
var next3 = document.getElementById("next3");
var c3_a = document.getElementsByClassName("c3_a")[0];
var Oc3_a = document.getElementsByClassName("c3_a")[1];
var _c3_a = document.getElementsByClassName("c3_a")[2];
var oc3_a = document.getElementsByClassName("c3_a")[3];
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
next1 .onclick = function(){
	Oc3_a.style.left = -1110+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
prev1 .onclick = function(){
	Oc3_a.style.left = 0+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
next2 .onclick = function(){
	_c3_a.style.left = -1110+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
prev2 .onclick = function(){
	_c3_a.style.left = 0+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
next3 .onclick = function(){
	oc3_a.style.left = -1110+"px";
//	c3_a.style.background = "red";
//	console.log(c3_a);
}
prev3 .onclick = function(){
	oc3_a.style.left = 0+"px";
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