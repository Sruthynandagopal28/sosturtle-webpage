$(document).ready(function(){
	// carousel slider
    $('.carousel_element:first').fadeIn();
    $('.bullets').click(function(){
        var currentIndex = $(this).index()+1;
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.carousel_element').fadeOut(0);
        $('.carousel_element:nth-child('+currentIndex+')').fadeIn();
		});

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

		// dropdown func
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
});