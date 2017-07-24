var imgs = document.getElementsByTagName("img");
	var isrc = [
		"../img/music.png",
		"../img/pic3.png",
		"../img/pic2.png",
		"../img/pic1.png",
		"../img/rotate.png",
		"../img/left.png",
		"../img/right.png",
		"../img/car.png",
		"../img/topdir.png",
		"../img/twotext.png",
		"../img/twocar.png",
		"../img/topdir.png",
		"../img/twopic1.png",
		"../img/twocircle.png",
		"../img/rotate1.png",
		"../img/bigcarlight.png",
		"../img/hand.png",
		"../img/topdir.png",
		"../img/img/car/Rouge Flamme.0001.png",
		"../img/img/car/Rouge Flamme.0002.png",
		"../img/img/car/Rouge Flamme.0003.png",
		"../img/img/car/Rouge Flamme.0004.png",
		"../img/img/car/Rouge Flamme.0005.png",
		"../img/img/car/Rouge Flamme.0006.png",
		"../img/img/car/Rouge Flamme.0007.png",
		"../img/img/car/Rouge Flamme.0008.png",
		"../img/img/car/Rouge Flamme.0009.png",
		"../img/img/car/Rouge Flamme.0010.png",
		"../img/img/car/Rouge Flamme.0011.png",
		"../img/img/car/Rouge Flamme.0012.png",
		"../img/img/car/Rouge Flamme.0013.png",
		"../img/img/car/Rouge Flamme.0014.png",
		"../img/img/car/Rouge Flamme.0015.png",
		"../img/img/car/Rouge Flamme.0016.png",
		"../img/img/car/Rouge Flamme.0017.png",
		"../img/img/car/Rouge Flamme.0018.png",
		"../img/img/car/Rouge Flamme.0019.png",
		"../img/img/car/Rouge Flamme.0020.png",
		"../img/img/car/Rouge Flamme.0021.png",
		"../img/img/car/Rouge Flamme.0022.png",
		"../img/img/car/Rouge Flamme.0023.png",
		"../img/img/car/Rouge Flamme.0024.png",
		"../img/img/car/Rouge Flamme.0025.png",
		"../img/img/car/Rouge Flamme.0026.png",
		"../img/img/car/Rouge Flamme.0027.png",
		"../img/img/car/Rouge Flamme.0028.png",
		"../img/img/car/Rouge Flamme.0029.png",
		"../img/img/car/Rouge Flamme.0030.png",
		"../img/img/car/Rouge Flamme.0031.png",
		"../img/img/car/Rouge Flamme.0032.png",
		"../img/img/car/Rouge Flamme.0033.png",
		"../img/img/car/Rouge Flamme.0034.png",
		"../img/img/car/Rouge Flamme.0035.png",
		"../img/img/car/Rouge Flamme.0036.png",
		"../img/img/car/Rouge Flamme.0037.png",
		"../img/img/car/Rouge Flamme.0038.png",
		"../img/img/car/Rouge Flamme.0039.png",
		"../img/img/car/Rouge Flamme.0040.png",
		"../img/img/car/Rouge Flamme.0041.png",
		"../img/img/car/Rouge Flamme.0042.png",
		"../img/img/car/Rouge Flamme.0043.png",
		"../img/img/car/Rouge Flamme.0044.png",
		"../img/img/car/Rouge Flamme.0045.png",
		"../img/img/car/Rouge Flamme.0046.png",
		"../img/img/car/Rouge Flamme.0047.png",
		"../img/img/car/Rouge Flamme.0048.png",
		"../img/img/car/Rouge Flamme.0049.png",
		"../img/img/car/Rouge Flamme.0050.png",
		"../img/img/car/Rouge Flamme.0051.png",
		"../img/img/car/Rouge Flamme.0052.png",
		"../img/img/car/Rouge Flamme.0053.png",
		"../img/img/car/Rouge Flamme.0054.png",
		"../img/img/car/Rouge Flamme.0055.png",
		"../img/img/car/Rouge Flamme.0056.png",
		"../img/img/car/Rouge Flamme.0057.png",
		"../img/img/car/Rouge Flamme.0058.png",
		"../img/img/car/Rouge Flamme.0059.png",
		"../img/img/car/Rouge Flamme.0060.png",
		"../img/img/car/Rouge Flamme.0061.png",
		"../img/img/car/Rouge Flamme.0062.png",
		"../img/img/car/Rouge Flamme.0063.png",
		"../img/img/car/Rouge Flamme.0064.png",
		"../img/img/car/Rouge Flamme.0065.png",
		"../img/img/car/Rouge Flamme.0066.png",
		"../img/img/car/Rouge Flamme.0067.png",
		"../img/img/car/Rouge Flamme.0068.png",
		"../img/img/car/Rouge Flamme.0069.png",
		"../img/img/car/Rouge Flamme.0070.png",
		"../img/img/car/Rouge Flamme.0071.png",
		"../img/img/car/360.png",
		"../img/img/car/jia.png",
		"../img/img/car/jian.png",
		"../img/topdir.png",
		"../img/threetext.png",
		"../img/sun.png",
		"../img/threetext1.png",
		"../img/threepic2s.png",
		"../img/suna.png",
		"../img/sunb.png",
		"../img/sunc.png",
		"../img/sund.png",
		"../img/hand.png",
		"../img/topdir.png",
		"../img/threepic2s.png",
		"../img/fourbc.png",
		"../img/topdir.png",
		"../img/fivencs.png",
		"../img/round.png",
		"../img/hand.png",
		"../img/topdir.png",
		"../img/hidden1.png",
		"../img/hidden2.png",
		"../img/hidden3s.png",
		"../img/hidden4.png",
		"../img/topdir.png",
		"../img/sevenpic1.png",
		"../img/sevenpic2.png",
		"../img/sevenpic3.png",
		"../img/topdir.png"
	]
	var tImgs=[];
	var num=0,m=0,w=0,x=0;
	var len = isrc.length;

    for (var i=0; i<len; i++){
        tImgs[i] = new Image();
		tImgs[i].src=isrc[i];
				
				
		(function(i){
			
			tImgs[i].onload = function(){
//				flagg = "ok";
				num++;
				m=parseInt(num/len*100);
//				w=$(".outer").width()*m/100;
//				console.log(m);
				$(".num").html(m+"%");
				$(".progress").css({
					width:m+"%"
				})
				if(m>=100){
					$(".wrapper").remove();
				}
			}
			tImgs[i].onerror = function(){flagg = "err"}
		})(i)
    }
window.onload=function(){
	
    
//  var timeBar = setInterval(function(){
//  	
//  },10);
    
    
	var audio=document.getElementsByTagName("audio");
	var flag=true;
	$(".music").on("click",function(){
		if(flag){
			audio[0].pause();
			$(".music").removeClass("demo");
			flag=false;
		}else{
			audio[0].play();
			audio[1].pause();
			$(".music").addClass("demo");
			flag=true;
			flag5=false;
		}
	})
	var flag5=true;
	$(".round").on("click",function(){
		if(flag5){
			audio[1].play();
			audio[0].pause();
			$(".music").removeClass("demo");
			flag=true
			flag5=false;
		}else{
			audio[1].pause();
			$(".music").addClass("demo");
			flag5=true;
		}
	})
//	var flag5=true;
//	$(".round").on("click",function(){
//		if(flag5){
//			$(".audio2").play();
//			$(".audio1").pause();
//			$(".music").removeClass("demo");
//			flag=true
//			flag5=false;
//		}else{
//			$(".audio2").pause();
//			$(".music").addClass("demo");
//			flag5=true;
//		}
//	})
	var flag1=true;
	$(".page3 p").eq(3).on("click",function(){
		if(flag1){
			$(".page3 p").eq(6).css({
				left:"0.6rem",
				top:"1.4rem"
			})
			flag1=false;
			$(".hand").hide();
		}else{
			$(".page3 p").eq(6).css({
				left:"-2.65rem",
				top:"3.4rem"
			})
			flag1=true;
		}
	})
	var flag2=true;
	$(".page3 p").eq(4).click(function(){
		if(flag2){
			$(".light").css({display:"block"});
			flag2=false;
			$(".hand").hide();
		}else{
			$(".light").css({display:"none"});
			flag2=true;
		}
	})
	var flag3=true;
	$(".page3 p").eq(5).click(function(){
		if(flag3){
			$(".page3 p").eq(6).css({
				left:"-4rem",
				top:"1rem"
			})
			flag3=false;
			$(".hand").hide();
		}else{
			$(".page3 p").eq(6).css({
				left:"-2.65rem",
				top:"3.4rem"
			})
			fla
			g3=true;
		}
	})
	
	
	
	var scale=1;
	$(".jia").on("click",function(){
		scale+=0.5;
		if(scale>=2){
			scale=2;
		}
		$("#box").css({transform:"scale("+scale+")"})
	})
	$(".jian").on("click",function(){
			scale-=0.5
		if(scale<=1){
			scale=1;
		}
		$("#box").css({transform:"scale("+scale+")"})
	})
	
	$(".threetext").on("click",function(){
		$(".threetext").fadeOut(100);
		$(".hand2").hide();
		$(".threetext1").fadeOut(100,function(){
			$(".suna").fadeIn(1000);
			$(".sunb").fadeIn(1000,function(){
				$(".suna").fadeOut(1000);
				$(".sunb").fadeOut(1000,function(){
					$(".sunc").fadeIn(1000);
					$(".sund").fadeIn(1000,function(){
						$(".sunc").fadeOut(1000);
						$(".sund").fadeOut(1000,function(){
							$(".threetext").fadeIn(1000);
							$(".threetext1").fadeIn(1000);
						});
					});
				});
			});
		});
	});
	
	$(".click").on("click",function(){
		$(".fourbc").css({display:"none"});
		$(".black").css({display:"none"});
		$(this).css({display:"none"});
	})
	
	//360度看图
	var startX,endX,a=0,b=0,n=0;
   	$(document).on('touchstart','#box',start);
	function start(e){
   		startX=e.originalEvent.touches[0].pageX;
   	}
	$(document).on("touchmove","#box",end);
	function end(e){
   		e.preventDefault();
   		endX=e.originalEvent.touches[0].pageX;
   		a=parseInt((endX-startX)/10);
//				   		console.log(a);
   		if(a>b){
   			n--;
   			if(n<0){
   				n=$("#box img").length-1;
   			}
   		}else if(a==b){
   			n=n;
   		}else{
   			n++;
   			if(n>$("#box img").length-1){
   				n=0;
   			}
   		}
   		b=a;
   		$("#box img").eq(n).show().siblings().hide();
   	}
	var flag4=true,n=0,time=null;
	$(".page4 p").eq(1).on("click",function(e){
		e.preventDefault();
		$(document).off("touchstart","#box",start);
		$(document).off("touchmove","#box",end);
		if(flag4){
			clearInterval(time);
			function Box(){
				n++;
				if(n>=$("#box img").length-1){
					n=0;
				}
				$("#box img").eq(n).show().siblings().hide();
			}
			time=setInterval(Box,50);
			flag4=false;
		}else{
			clearInterval(time);
			flag4=true;
			$(document).on('touchstart','#box',start);
			$(document).on("touchmove","#box",end);
		}
	})
}
