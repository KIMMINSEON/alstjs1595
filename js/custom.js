$(function () {
    
   $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#top').fadeIn("fast");
        } else {
            $('#top').fadeOut("fast");
        }
    });
    $('#top').click(function () { 
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
    
      $("#popupBox1").hide();  
      
      var popup = $("#popupBox1");
      
      $(".close").on("click", function(){
        popup.fadeOut();
      });
      
      $(".close2").on("click", function(){
        $(this).parent().slideUp();
      });
      
     var galleryLink = $(".gallery").find("a"),
         imgBox = $(".contentPopup");
      
      imgBox.css("overflow", "hidden")
            .html("<img>")
            .find("img")
            .width(100 + "%")
            .attr("src","img/gallery/j02_big.jpg");
      
      galleryLink.on("click", function(e){
        e.preventDefault();
        var $this = $(this),
            dataBig = $this.find("img").attr("data-big");
        popup.fadeIn();
        imgBox.find("img").attr("src", dataBig);
      });

    // 스크롤 올리고 내릴때 보이게 안보이게
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    // 변수 높이값 지정
//    var ht = $(window).height();
//    // 브라우저 높이값을 section의 높으값으로
//    $("section").height(ht);
    
//     var ht = $("section").height();
//    $("section").height(ht);

//    $(window).on('resize', function () {
//        var ht = $(window).height();
//        $("section").height(ht);
//    });
    
//    $(window).on('resize', function () {
//        var ht = $("section").height();
//        $("section").height(ht);
//    });

    // 메뉴버튼클릭

//    $("#menu>ul>li").on('click', function (e) {
//        e.preventDefault()
//
//        var ht = $(window).height();
//        var i = $(this).index();
//        var nowTop = i * ht;
//        $("html,body").stop().animate({
//            "scrollTop": nowTop
//        }, 1000);
//    });
    
//    $("#menu>ul>li").on('click', function (e) {
//        e.preventDefault()
//
//        var ht = $("section").height();
//        var i = $(this).index();
//        var nowTop = i * ht;
//        $("html,body").stop().animate({
//            "scrollTop": nowTop
//        }, 1000);
//    });
    
    // 마우스 휠 움직일때

    $("section").on('mousewheel', function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({
                "scrollTop": prev
            }, 1000, "easeInOutSine");
        } else if (delta < 0) {
            var next = $(this).next().offset().top;

            $("html,body").stop().animate({
                "scrollTop": next
            }, 1000, "easeInOutSine");
        }
    });
    
    // 이미지 마우스 올렸을때
    
    /*var this = $(this);
    
    $(".workList>ul>li>a").on("mouseover",function(){
        $(this).find("span").slideDown(500);
        $(this).find("span").not().hide();
    });*/
    
});