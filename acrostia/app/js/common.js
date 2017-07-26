$(function() {
	$(document).ready(function(){

	    //preloader
        $(window).on("load", function(){
            $('.preloader').delay(300).fadeOut("slow");
        });

	    //window height
        function heightDetect() {
            $("#Home").css("height", $(window).height());
            $(".item").css("height", $(window).height());
        }
        heightDetect();
        $(window).resize(function () {
            heightDetect();
        });

        /* *****************MENU******************** */
        $(".menu_button").click(function () {
            //change button
            $(".menu_button").toggleClass("change");
            $(".tab").toggle(200, function () {// hide-show mobile menu
                $(this).css({"height": $(window).height() });
            });
            $(".content-block , header img").delay(200).toggleClass("bg-content");// hide-show content blur
        });

        $(window).resize(function () {
            var wind = $(window).width();
            if( wind > 992){
                $(".tab").show().css("height", "72px");
                $(".menu_button").removeClass("change");
                $(".content-block , header img").delay(200).removeClass("bg-content"); // hide content blur
            } else{
                $(".tab").hide();
                $(".menu_button").removeClass("change");
                $(".content-block , header img").delay(200).removeClass("bg-content"); // hide content blur
            }
        });

        $(".tablinks").click(function() {
            var menu_wind = $(window).width();
            if( menu_wind < 992){
                $(".tab").hide(); // hide mobile menu
                $(".content-block , header img").delay(200).removeClass("bg-content"); // hide content blur
            }
            $(".menu_button").removeClass("change");//change button
        });
        /* ************************************************************************** */

        /*CAROUSEL*/
        var owl1 = $('#owl-first');
        owl1.owlCarousel({
            margin: 0,
            nav: true,
            navText: ["<i class='fa fa-chevron-left owf-prev'></i>", "<i class='fa fa-chevron-right owf-next'></i>"],
            loop: true,
            autoplay:true,
            autoplayTimeout:4000,
            items: 1
        });
        /* *******************************************BACKGROUND ************************* */
        $("button").click(function () {
            if($(".home-link").hasClass("active")){
                $("body").css({"background" : "url('../img/home/bg1.jpg') center no-repeat",
                    "background-size" : "cover"});
            }
            if($("#service-link").hasClass("active")){
                $("body").css({"background" : "url('../img/services/bg.png') no-repeat center #b24a50",
                    "background-size" : "cover"});
            }
            if($("#about-link").hasClass("active")){
                $("body").css({"background" : " url('../img/about/bg.png') no-repeat center #665464",
                    "background-size" : "cover"});
            }
            if($("#work-link").hasClass("active")){
                $("body").css({"background" : " url('../img/work/bg.png') no-repeat #81a256",
                    "background-size" : "cover"});
            }
            if($("#contacts-link").hasClass("active")){
                $("body").css({"background" : " url('../img/contacts/bg.png') no-repeat center #75b4aa",
                    "background-size" : "cover"});
                myMap();
            }
        });

        /* ****************************WORK ********************************** */
        $(".tab-work a").click(function () {
            $(".tab-work a i").toggleClass("change-arrow");
            $(".btn-tablinks-work").toggle(1000);
            $(".tab-work").toggleClass("change-tab-work");
        });

        $(window).resize(function(){
            var work_wind = $(window).width();
            if( work_wind > 768){
                $(".tab-work a i").removeClass("change-arrow");
                $(".btn-tablinks-work").show();
                $(".tab-work").removeClass("change-tab-work");
            }
             if( work_wind < 768){
                 $(".btn-tablinks-work").hide();
             }
        });
    });
});



//HEADER TABS
function openTab(evt, tabName) {
    var i, tab_content, tablinks;
    tab_content = document.getElementsByClassName("content-block");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";


}

//WORK TABS
function openTabWork(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-work");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-work");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}




// MAP
function myMap() {
    var mapCanvas = document.querySelector("#googleMap");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}




// Get the element click on it
document.getElementById("defaultOpen").click();
document.querySelector("#openWork").click();


