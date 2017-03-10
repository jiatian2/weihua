var ID=document.getElementById("ID");
var li=document.getElementsByTagName("li");
var pwd=document.getElementById("pwd");

//账号
//ID.onblur=function(){
//	var reg=/^\w+@\w+(\.\w+)+$/ ;//( xxxxx @ xxxx(.xxxx)+)
//	var a=reg.test(ID.value);
//	
//	if(a){
//		li[1].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>(该账号可用)</span>";
//	}else{
//		li[1].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>(该账号不符合格式)</span>";
//	}
//	if(ID.value==null||ID.value==""){
//		li[1].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>账号不能为空</span>";
//	}
//}
//ID.onfocus=function(){
//	li[1].getElementsByTagName("td")[2].innerHTML = "";
//}
//密码			
			pwd.onblur=function(){
				var reg=/^.{6,20}$/ ;//( xxxxx @ xxxx(.xxxx)+)
				var a=reg.test(pwd.value);
				if(a){
					li[2].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>(该密码可用)</span>";
				}else{
					li[2].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>(该密码不符合格式)</span>";
				}
				if(pwd.value==null||pwd.value==""){
					li[2].getElementsByTagName("td")[2].innerHTML = "<span style='color:red'>密码不能为空</span>";
				}
			}
			//console.log(pwd.value);
			pwd.onfocus=function(){
				li[2].getElementsByTagName("td")[2].innerHTML = "";
			}