var userName=document.getElementById("userName");
var pwdf=document.getElementById("pwdf");
var pwtx=document.getElementById("pwtx");


var ul=document.getElementsByTagName("ul");
var p3=document.getElementById("p3");	
var testnum=document.getElementById("testnum");
var btn=document.getElementById("replace");
var num=document.getElementById("num");

//用户名验证			
userName.onblur=function(){
	ajax("user.json",function(res){
		var data=JSON.parse(res);
		if(userName.value==""){
			flag2=0;
			userT.innerHTML="用户名不能为空";
		}else{
			for(var x in data){
//							console.log(data[x].name);
//							console.log(userName.value);
				if(data[x].name==userName.value){
					flag2=1;
					userT.innerHTML="";
					return;
				}else{
					flag2=0;
					userT.innerHTML="用户名不存在";	
				}
			}
		}
	});
}

//密码验证
pwdf.onblur=function(){
	var pwd1=pwdf.value;
	var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]{5,11}$/;
	if(pwd1==""){
		flag3=0;
		pwtx.innerHTML="密码不能为空";
	}else{
		if(reg.test(pwd1)){
			flag3=1;
			pwtx.innerHTML="";
		}else{
			flag3=0;
			pwtx.innerHTML="密码格式错误";
		}
	}
}
//用户名验证
//var userName = document.getElementById("userName");
//			userName.onblur = function(){
//				var reg = /^[1][0-9a-zA-Z@]{5,11}$/;
//				var oText = userName.value;
//				console.log(reg.test(oText));
//			}		
		//验证码 
			function ranCode(){
				var oAc=parseInt(Math.random()*1000+1000);
				var a=parseInt(Math.random()*256);
				var b=parseInt(Math.random()*256);
				var c=parseInt(Math.random()*256);
				num.value=oAc;
				num.style.color="rgb("+a+","+b+","+c+")";
			}
			ranCode();
//			console.log(ranCode());
			num.onclick=function(){
				ranCode();
			}
			
			var code ; //在全局定义验证码   
			//产生验证码  
			btn.onclick = function createCode(){  
			     code = "";   
			     var codeLength = 4;//验证码的长度  
			     //var checkCode = document.getElementById("code");   
			     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
			     'S','T','U','V','W','X','Y','Z');//随机数  
			     for(var i = 0; i < codeLength; i++) {//循环操作  
			        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
			        code += random[index];//根据索引取得随机数加到code上  
			    }  
			    num.innerHTML = code;//把code值赋给验证码  
			    console.log(code);
			   
			} 
			//console.log(phone.value); 

			testnum.onblur=function validate(){  
			    var inputCode = testnum.value.toUpperCase(); //取得输入的验证码并转化为大写        
			    if(inputCode.length <= 0) { //若输入的验证码长度为0  
			        ul[10].getElementsByTagName("li")[2].innerHTML = "<span style='color:red'>请输入验证码</span>"; 
			    }         
			    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
			        ul[10].getElementsByTagName("li")[2].innerHTML = "<span style='color:red'>(验证码不正确)</span>"; 
			        createCode();//刷新验证码  
			        testnum.value = "";//清空文本框  
			    }         
			    else { //输入正确时  
			        ul[10].getElementsByTagName("li")[2].innerHTML = "<span style='color:red'></span>";  
			    }             
			}
			testnum.onfocus=function(){
				ul[10].getElementsByTagName("li")[2].innerHTML = "";
			}