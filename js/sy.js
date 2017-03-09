function getId(str){
				return document.getElementById(str);
			}
//			var oWrap = getId("wrap");
//			var oPop = getId("pop");
//			oWrap.onmouseover = function(){
//				move(oPop,{"top":"0"});
//			}
//			oWrap.onmouseout = function(){
//				move(oPop,{"top":"300px"});
//			}
			var oImg = getId("Img");
			oImg.onmouseover = function(){
				move(oImg,{"margin-left":"10px","opacity":"0.8"});
			}
			oImg.onmouseout = function(){
				move(oImg,{"margin-left":"0px","opacity":"1"});
			}