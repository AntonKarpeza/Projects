$(function() {
    $(document).ready(function(){

        /*preloader*/
        $(window).on("load", function(){
            $('.preloader').delay(1000).fadeOut("slow");
        });


		/*menu - mobile menu*/
        var touch = $('.menu_img');
        var menu = $('.navigate');
        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 768 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });


		/*___________________________________________companies*/
		/*companies slider*/
        var comp = $('#owl-companies');
        comp.owlCarousel({
            nav: true,
            navText: ['<img src="img/main/companies-slider/prev-comp.png">', '<img src="img/main/companies-slider/next-comp.png">'],
            rewindNav : true,
            navClass: ["companies-prev", "companies-next"],
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                },
                1600: {
                    items: 8
                },
                1920: {
                    items:9
                }
            }
        });


		/*___________________________________________popular-new-spec*/
		/*popular-new-spec slider*/
        var pnsp = $('#owl-pns-pop');
        pnsp.owlCarousel({
            nav: true,
            navText: ["<img class='tpns-prev hidden-lg' src='img/main/tab_pop-new-spec/prev-pns.png'>", "<img class='tpns-next hidden-lg' src='img/main/tab_pop-new-spec/next-pns.png'>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

		/*popular-new-spec slider*/
        var pnsn = $('#owl-pns-new');
        pnsn.owlCarousel({
            nav: true,
            navText: ["<img class='tpns-prev hidden-lg' src='img/main/tab_pop-new-spec/prev-pns.png'>", "<img class='tpns-next hidden-lg' src='img/main/tab_pop-new-spec/next-pns.png'>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

		/*popular-new-spec slider*/
        var pnss = $('#owl-pns-spec');
        pnss.owlCarousel({
            nav: true,
            navText: ["<img class='tpns-prev hidden-lg' src='img/main/tab_pop-new-spec/prev-pns.png'>", "<img class='tpns-next hidden-lg' src='img/main/tab_pop-new-spec/next-pns.png'>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        $(".pns-item").mouseenter(function () {
            $(".btn-pns", this).css("display", "block");
        }).mouseleave(function () {
            $(".btn-pns", this).css("display", "none");
        });


		/*____________________________________________info-center*/
		/*companies slider*/
        var info = $('#owl-info-center');
        info.owlCarousel({
            nav: true,
            loop: true,
            navText: ["<img class='info-prev hidden-md hidden-lg' src='img/main/info-center/prev-info.png'>", "<img class='info-next hidden-md hidden-lg' src='img/main/info-center/next-info.png'>"],
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 3
                }
            }
        });


		/*menu catalog*/
        var btn = $('.btn-menu-catalog');
        var menuCat = $('.menu-catalog');
        $(btn).on('click', function(e) {
            e.preventDefault();
            menuCat.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 992 && menuCat.is(':hidden')) {
                menuCat.removeAttr('style');
            }
        });

        $(".btn-menu-catalog").click(function(){
            $(".btn-menu-catalog img").toggleClass("change");
        });



        $(".list-item-catalog").click(function(){
            $(this).next().slideToggle("slow");
        });

		/*SEARCH*/
        //top
        var wid = $(window).width();


        //#alpha,param-top
        wid > '462' ? $('#alpha-top, #param-top').addClass('col-xs-5') :
            $('#alpha-top, #param-top').removeClass('col-xs-5');


        $(window).resize(function(){
            var wid = $(window).width();
            wid > '462' ? $('#alpha-top, #param-top').addClass('col-xs-5') :
                $('#alpha-top, #param-top').removeClass('col-xs-5');
        });

        //#alpha,view-top
        if(wid > '1900'){
            $('#alpha-top').removeClass('col-lg-5').addClass('col-lg-3');
            $('#class2-wiev-search').removeClass('col-lg-4').addClass('col-lg-6');
        } else {
            $('#alpha-top').removeClass('col-lg-3').addClass('col-lg-5');
            $('#class2-wiev-search').removeClass('col-lg-6').addClass('col-lg-4');
        }

        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > '1900'){
                $('#alpha-top').removeClass('col-lg-5').addClass('col-lg-3');
                $('#class2-wiev-search').removeClass('col-lg-4').addClass('col-lg-6');


            } else {
                $('#alpha-top').removeClass('col-lg-3').addClass('col-lg-5');
                $('#class2-wiev-search').removeClass('col-lg-6').addClass('col-lg-4');
            }
        });

        //bottom


        //#des,price-bottom
        wid > '462' ? $('#des-bottom, #price-bottom').addClass('col-xs-6') :
            $('#des-bottom, #price-bottom').removeClass('col-xs-6');

        $(window).resize(function(){
            var wid = $(window).width();
            wid > '462' ? $('#des-bottom, #price-bottom').addClass('col-xs-6') :
                $('#des-bottom, #price-bottom').removeClass('col-xs-6');
        });


        //#price-search

        wid > '1900' ? $('#class2-price-search, #class2-all-search').addClass('col-lg-6') :
            $('#class2-price-search, #class2-all-search').removeClass('col-lg-6');

        $(window).resize(function(){
            var wid = $(window).width();
            wid > '1900' ? $('#class2-price-search, #class2-all-search').addClass('col-lg-6') :
                $('#class2-price-search, #class2-all-search').removeClass('col-lg-6');
        });

        //top-bottom
        wid > '1900' ? $('#class2-colors-description, #class2-checkbox-description').addClass('col-lg-6') :
            $('#class2-colors-description, #class2-checkbox-description').removeClass('col-lg-6');

        $(window).resize(function(){
            var wid = $(window).width();
            wid > '1900' ? $('#class2-colors-description, #class2-checkbox-description').addClass('col-lg-6') :
                $('#class2-colors-description, #class2-checkbox-description').removeClass('col-lg-6');
        });

        //block grig catalog

        $('.block_grid_catalog', this).mouseenter(function(){
            $(this).addClass("block-hover");
            $('.prev-grid, .next-grid', this).css('display', 'block');
            var el = $('.hiddendes-block-grid', this);
            setTimeout(function(){
                $(el).css('display', 'block');
            }, 0);
        }).mouseleave(function(){
            $('.prev-grid, .next-grid', this).css('display', 'none');
            $('.hiddendes-block-grid').css('display', 'none');
            var el = $(this);
            setTimeout(function(){
                $(el).removeClass("block-hover");
            }, 200);
        });

        $('#catalog_grid').mouseenter(function () {
            $('.hiddendes-block-grid').css('display', 'none');
        });

        //block grid catalog - owl-carusel
        var owl = $('.block-owl');
        owl.owlCarousel({
            margin: 0,
            center: true,
            nav: true,
            navText: ["<img class='prev-grid' src='img/cat_pl/grid/prev-grid.png'>", "<img class='next-grid' src='img/cat_pl/grid/next-grid.png'>"],
            loop: true,
            items: 1
        });

        //block-grid-change
        wid > '1900' ? $('.block-grid-change').addClass('col-lg-3') :
            $('.block-grid-change').addClass('col-lg-4');

        $(window).resize(function(){
            var wid = $(window).width();
            if(wid>'1900'){
                $('.block-grid-change').removeClass('col-lg-4');
                $('.block-grid-change').addClass('col-lg-3');
            }
            else{
                $('.block-grid-change').removeClass('col-lg-3');
                $('.block-grid-change').addClass('col-lg-4');
            }
        });

        //carusel product

        if(wid<'750'){
            $('#icon-img-product').addClass(' owl-carousel owl-theme');
        }

        $(window).resize(function(){
            var wid = $(window).width();
            if(wid>'750') {
                $('#icon-img-product').removeClass(' owl-carousel owl-theme ');
            }
            else{
                $('#icon-img-product').addClass(' owl-carousel owl-theme');
            }
        });

        var owlprod = $('#icon-img-product');
        owlprod.owlCarousel({
            margin: 0,
            nav: true,
            navText: ["<img class='prev-prod' src='img/cat_pl/product/prew-prod.png'>", "<img class='next-prod' src='img/cat_pl/product/next-prod.png'>"],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                }
            }
        });

    });
});

/*TAB products*/
function openProd(evt, prodName){
    var i, prodcontent, prodlinks;
    prodcontent = document.getElementsByClassName("prodcontent");
    for(i=0; i < prodcontent.length; i++){
        prodcontent[i].style.display = "none";
    }
    prodlinks = document.getElementsByClassName("prodlinks");
    for(i=0; i< prodlinks.length; i++){
        prodlinks[i].className = prodlinks[i].className.replace(" active", "");
    }
    document.getElementById(prodName).style.display = "block";
    evt.currentTarget.className += " active";
}




/*TAB pop-new-spec*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defOpn" and click on it
document.getElementById("defOpn").click();
