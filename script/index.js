$(document).ready(function(){
	// carousel slider

    // $('.carousel_element:first').fadeIn();
		// function carousel(){
		// 	var currentIndex = $(this).index()+1;
		// 	$(this).addClass('selected').siblings().removeClass('selected');
		// 	$('.carousel_element').fadeOut(0);
		// 	$('.carousel_element:nth-child('+currentIndex+')').fadeIn();
		// }

		function carouselSlider(){
			var currentIndex = $(this).index();
			var slideValue = currentIndex * 100;
			$(this).addClass('selected').siblings().removeClass('selected');
			$('.carousel_container').css('transform','translateX(-' + slideValue + '%)');
		}
		$('.bullets').on('click', carouselSlider);

		
	// header background change
    $(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var headerHeight = $("header").outerHeight();
		var headerHeight = $("header").outerHeight();
		var bgScrollValue = 1100 - headerHeight;
		if (scroll > bgScrollValue) {
		   $("header").addClass('bg-change');
		}
		else{
			$("header").removeClass('bg-change');  	
		}
		});
		
		$(".menu_bar").click(function(){
			$("header").toggleClass('nav_open');
		});

		
	// dropdown function
    $(".dropdown h6").click(function(){
			event.stopPropagation();
			$(this).next().slideToggle();
		});
		$(document).on("click", function(event){
				var $dropdown = $(".dropdown h6");
				if($dropdown !== event.target && !$dropdown.has(event.target).length){
						$(".dropdown_list").slideUp();
				}    
		});   

	// for getting the text value in dropdown
		$(".dropdown_list li").click(function(){
				var dropval = $(this).text();
				$(this).parents('.dropdown').children('p').text(dropval);
				$(this).parent('ul').slideUp();
		});


	// video
		$(".play").click(function(){
			$(".hero_section").css("background","none");
			$('video').attr("src","videos/video.mov");
		});


	// for text animation
	var i = 0;
	var txt = 'HOW WE USE YOUR DONATION';
	function typeWriter() {
		if (i < txt.length) {
			var animate = $("#text_animate");
			animate.text(animate.text()+txt.charAt(i++));
			setTimeout(typeWriter, 150);
		}
	}
	typeWriter();


	// for getting the border for the selected nav menu
	function activeBorder(){
		var activeBorder = $(".active_border");
		var  activeAnchorWidth = $("nav a.active").outerWidth();
		var activeAnchorPosition = $("nav a.active").position().left;
		activeBorder.css({"transform": "translateX("+activeAnchorPosition+"px)" , "width" : activeAnchorWidth});
	}
	activeBorder();

	$("nav a").click(function() {
			var left = $(this).position().left;
			var width = $(this).outerWidth();
			var activeBorder = $(".active_border");
			$(this).addClass('active').siblings().removeClass('active');
			activeBorder.css({"transform": "translateX("+left+"px)" , "width" : width});
	});

});
