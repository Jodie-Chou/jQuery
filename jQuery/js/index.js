$(function(){
			$("#top ul.right>li").hover(function(){
			$(this).toggleClass('hover').children("div").stop().slideToggle(200);
			});
			$("#logo .nowCity").hover(function(){
				$(this).toggleClass("hover");
			});
			$("#navWrap ul.nav li").hover(function(){
				$(this).toggleClass("hover");
			});
			/*幻灯效果*/
				var $slideliNum=$("#slideWrap ul.slideNum li");
				var SslideliIum=$("#slideWrap ul.slideImg li");
				var adTimer=true;
			function slideShow(Num){
				if (Num==$()) {
					return false;
				}
				$slideliNum.eq(Num).addClass("current").siblings("li").removeClass('current');
				SslideliIum.finish().fadeOut().eq(Num).fadeIn().css({"z-index":1});
			};
			slideShow(0);
			//鼠标悬停时；
				$slideliNum.on("mouseenter.trigger",function(){
				crrNum=$slideliNum.filter(".current").index();
				var Num=$(this).index();
				if (Num==crrNum){
					return null;
				}
				slideShow(Num);
			});
				($slideliNum).hover(function() {
					adTimer=false;
				}, function() {
					adTimer=true;
				}).add(SslideliIum);
			//自动执行幻灯效果；
				setInterval(function(){
					if (adTimer){
						var $nextN=$slideliNum.filter(".current").next();
						if ($nextN.length==0) {
							$slideliNum.eq(0).triggerHandler('mouseenter.trigger');
						}else{
							$slideliNum.filter(".current").next().triggerHandler('mouseenter.trigger');
						}	
						}
					},4000);
			//左侧导航
			$("#leftNav ul.leftNavTit li>a").click(function(){
				$(this).parent().addClass('current')
				.siblings('li').removeClass("current");
			});
			//每日特惠鼠标悬停效果：左边
			var $daySalesLi=$("#daySales .left ").children('ul').find("li");
			$daySalesLi.hover(function(){
				$(this).find("div.leftCont").finish().css({"opacity":0.6}).animate({height:75,opacity:1}, 200);
				$(this).find('h4').css({"height":43+"px"});
			},function(){
				$(this).find('h4').css({"height":24+"px"});
				$(this).find("div.leftCont").finish().css({"height":55+"px"});;
			});
			//每日特惠鼠标悬停效果：右边
			$("#daySales div.right ul.rightImg li").hover(function(){
					$(this).find("img.twoCode").finish().animate({top:0},200);
			},function(){
					$(this).find("img.twoCode").finish().animate({top:196+"px"},200);
			});
			//延迟图片加载
			$("img.delay").attr({"src":"http://www.5khouse.com/images/ajax-loader-big.gif"});
			function loadImg(){
				if ($("img.delay").length==0) {
							$(window).off(".loading");
						};
				$("img.delay").each(function(){
					
					
					$imgTop=$(this).offset().top;
					$heightNow=$(window).scrollTop()+$(window).height();
					if ($imgTop<$heightNow) {
						$(this).attr({"src":$(this).data("src")}).removeClass("delay");
					} else {
						return false;
					}

				});

			};
			loadImg();
			$(window).on("scroll.loading resize.loading",loadImg);
			//悬浮广告
			$("#fixAd a.close").click(function(){
				$("#fixAd").fadeOut(200);
			});
			//回到顶部
			$("#toTop a").click(function(){
				$("body,html").animate({"scrollTop":0},200);
			});
			//滚动条滑动超过50px显示回到顶部按钮
			$("#toTop").hide();
			$(window).scroll(function(){
				if ($(window).scrollTop()>550) {
				$("#toTop").show();
			}else{
				$("#toTop").hide();
			}
			});
		});