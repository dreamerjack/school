// JavaScript Document
$(function(){
	
	
<!--导航隐藏开始-->	
$('.nav-list').mouseenter(function(){
	
$('#nav-bottom').show()
	
	}).mouseleave(function(){
		
$('#nav-bottom').hide()		
		
	})
	
$('#nav-bottom').mouseenter(function(){
	
$(this).show()	
	}).mouseleave(function(){
		
	$(this).hide()	
		
		})	
	<!--导航隐藏结束-->
	
<!--图片轮播开始-->	
var index=0;	
var play=setInterval(auto,3000)	
	
	$('.center').mouseover(function(){
		clearInterval(play)
		
		}).mouseleave(function(){
			
			play=setInterval(auto,3000)})
			
		function auto(){
			index++;
			index%=8;
	
	$('.center-ul-list').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()
	
			}	
$('.center-left3').mouseenter(function(){
	
	$(this).addClass('center-left-2')
	}).mouseleave(function(){
		
	$(this).removeClass('center-left-2')	
		
		})			
			
			
	$('.center-right').mouseenter(function(){
	
	$(this).addClass('center-right-2')
	}).mouseleave(function(){
		
	$(this).removeClass('center-right-2')	
		
		})					
			
$('.center-left3').click(function(){
	index--;
	if(index<0)index=7;
$('.center-ul-list').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()	
	})	
	
$('.center-right').click(function(){
	index++;
	index%=8;
$('.center-ul-list').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()	
	})		
	
	
<!--图片轮播结束-->	
	
$('.content-left-right-top-left1').mouseenter(function(){
	
var index=$(this).index()
$(this).addClass('cont-left-right-top-left-bgc').siblings().removeClass('cont-left-right-top-left-bgc')	

	})	
	
	
$('.content-left-right-top-left2').mouseenter(function(){
$('.content-huan-1').show()
$('.content-huan-2').hide()
	})
	
$('.content-left-right-top-right1').mouseenter(function(){
$('.content-huan-1').hide()	
$('.content-huan-2').show()
	})	
	
	
$('.content-left-right-top-left3').mouseenter(function(){
	$('.content-huan-3').show()
$('.content-huan-4').hide()
	})	
	
$('.content-left-right-top-right4').mouseenter(function(){
	$('.content-huan-4').show()
$('.content-huan-3').hide()
	})		
	
	
	
//$('.content-left-right-top-right').mouseenter(function(){
	//$('.content-huan-3').show()
//$('.content-huan-4').hide()
//	})		
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})