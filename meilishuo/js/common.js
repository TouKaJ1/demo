//TOP	-----------------------------------------------
$(".navT li").mouseenter(function(){
	$(this).children(".dh-span1").css("display","block");
})
$(".navT li").mouseout(function(){
	$(this).children(".dh-span1").css("display","none");
})

$(".navT li").mouseenter(function(){
	$(this).children(".dh-span").css("display","block");
})
$(".navT li").mouseout(function(){
	$(this).children(".dh-span").css("display","none");
})


//NAV --------------------------------------------------------------------------
$(".nav li").siblings().hover(function(){
	$(this).css({
		"border-bottom" : "3px solid red"
	})
},function(){
	$(this).css({
		"border-bottom" : "none"
	})
})


