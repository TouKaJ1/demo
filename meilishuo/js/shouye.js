//搜索框选项卡------------------------------------------------------------------

$(".tabU li").click(function(){
	$(".tabU li").css({"background":"#ccc"});//所有的背景都是灰色
	$(".tabU a").css("color","#333");		
	$(this).css("background","red");		//点击过的背景为红色
	$(this).children("a").css("color","#fff");
	
	$(".tabO li").css("display","none");
	$(".tabO li").eq( $(this).index() ).css("display","block")
})

//banner图-----------------------------------------------------------------------
//获取json动态创建
	var deff = $.ajax({
		url : "json/first.json",
		type : "get"
	})
	deff.done(function(res){
			
		var html = "";
//		<img src="${res[0].src}"/>

		html += `	
			<ul class="uu">
	       		<li style="z-index:4;"><img src="${res[0].src}" alt=""/></li>
		        <li style="z-index:3;"><img src="${res[1].src}" alt=""/></li>
		        <li style="z-index:2;"><img src="${res[2].src}" alt=""/></li>
		        <li style="z-index:1;"><img src="${res[3].src}" alt=""/></li>
		    </ul>
		    <ol class="oo" style="z-index: 10;">
		        <li class="current">1</li>
		        <li>2</li>
		        <li>3</li>
		        <li>4</li>
		    </ol>
		    <div id="arr">
		        <div id="banL"><</div>
		      	<div id="banR">></div>
	  		</div>
		`
		
		$("#ban").html(html);
		

		timer = setInterval(autoPlay,1500);
	    var $olist = $(".oo>li");
	    var $ulist = $(".uu>li");
	    var index = 0;
	    function autoPlay(){
	    	index ++;
	    	if( index == $olist.size() ){
	    		index = 0;
	    	}
	    	$olist.eq(index).addClass("current").siblings().removeClass("current");
	    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
	    	$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	    } 
//左右按键--------------------------------------------------------------------------------------------------	    
	    $("#ban").mouseover(function(){
	   		$("#banL").css("display","block")
	   		$("#banR").css("display","block")
	   	})
	   	$("#ban").mouseout(function(){
	   		$("#banL").css("display","none")
	   		$("#banR").css("display","none")
	   	})

		$("#banR").click(function(){
			index ++;
			if(index == $olist.size() ){
				index = 0;
			}
			$olist.eq(index ).addClass("current").siblings().removeClass("current");
			$ulist.eq(index ).fadeIn(0).siblings().fadeOut(0)
			clearInterval(timer);
			timer = setInterval(autoPlay , 1500)
		})
		
		$("#banL").click(function(){
			index -- ;
			if(index == -1){
				index = $olist.size();
			}
			$olist.eq(index ).addClass("current").siblings().removeClass("current");
			$ulist.eq(index ).fadeIn(0).siblings().fadeOut(0)
			clearInterval(timer);
			timer = setInterval(autoPlay , 1500)
		})
//小图标点击切换
		
		$olist.click(function(){
			setInterval(timer);
			$ulist.eq( $(this).index() ).addClass("current").siblings().removeClass("current")
//			alert($(this).index())
		})
	})
//		datatype : "json",
//		success : function(res){
//			console.log("看到我你就写对啦！")
//		console.log(res[0].src)
			
					
//		}
//		$("#div").html(html)
//	});
	
	

