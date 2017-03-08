$(function(){
	var times=null;
	$(".li1").mouseover(function(){
    	$(".y").css("display","block");
	});
	times=setTimeout(function(){
		$(".li1").mouseout(function(){	
		$(".y").css("display","none");
		});
	},2000);
//	$(".y").mouseover(function(){
//  	clearTimeout(times)
//	});
	
	
});
$(function(){
	var times=null;
	$(".li2").mouseover(function(){
    	$(".g").css("display","block");
	});
	times=setTimeout(function(){
		$(".li2").mouseout(function(){	
		$(".g").css("display","none");
		});
	},2000);
});

$(function(){
	var times=null;
	$(".li3").mouseover(function(){
    	$(".h").css("display","block");
	});
	times=setTimeout(function(){
		$(".li3").mouseout(function(){	
		$(".h").css("display","none");
		});
	},2000);
});