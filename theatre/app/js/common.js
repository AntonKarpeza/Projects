$(function() {
	$(document).ready(function(){
		/*Main slider*/
        var owlMain = $('#owl-main');
        owlMain.owlCarousel({
            loop: true,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            feedDrag: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            animateOut: 'fadeOut',
            smartSpeed: 950
        });
		/******************************/
        var owlAbout = $('#owl-about');
        owlAbout.owlCarousel({
            loop: true,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            feedDrag: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            animateOut: 'fadeOut',
            smartSpeed: 950
        });


        //photo
        $( '#slid-pro' ).sliderPro({
            width: 600,
            height: 700,
            orientation: 'vertical',
            loop: false,
            arrows: true,
            buttons: false,
            thumbnailsPosition: 'bottom',
            thumbnailPointer: true,
            thumbnailWidth: 300,
            thumbnailHeight: 100,
            breakpoints: {
                768: {
                    width: 600,
                    height: 600,
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 0,
                    thumbnailHeight: 0
                },
                480: {
                    width: 280,
                    height: 300,
                    thumbnailsPosition: 'bottom',
                    thumbnailWidth: 0,
                    thumbnailHeight: 0
                }
            }
        });

        function contentBlockResize(){
        	$(".content-block").css({"height": $(window).height()});
		}
		contentBlockResize();
        $(window).resize(function(){
        	contentBlockResize();
		});

        //menu
        var touch = $('.menu_button');
        var menu = $('.navigate');
		/*____________________________________button*/
        $(touch).click(function(){
            $(this).toggleClass("change");
        });
		/*_________________________________________*/
        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.fadeToggle('slow');
        });
        $(".menu_link").on('click', function() {
            $(touch).toggleClass("change");
            menu.fadeOut('slow');
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000,
                easing: "swing"
            });
            return false;
        });

        /*ANIMATION*/
        //main

        $("#block-main").animated("fadeInLeft", "fadeOutLeft");
        $("#block-about").animated("fadeInRight", "fadeOutRight");
        $("#block-photo").animated("fadeInLeft", "fadeOutLeft");
        $("#block-description").animated("fadeInRight", "fadeOutRight");
        $("#block-contacts").animated("fadeInLeft", "fadeOutLeft");

	});
});

$(window).on("load", function(){
    $('.preloader').delay(800).fadeOut("slow");
});