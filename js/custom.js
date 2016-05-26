$(function () {
    
   // 맨위로 가기 
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
    
    // 팝업창
    
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

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header,#tigger').removeClass('nav-down').addClass('nav-up');
        } else {
            
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    // 모바일 메뉴
    
    var trigger = $('#trigger');
    var menu = $('nav ul');
	$(trigger).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 1280 && menu.is(':hidden')) {
        menu.removeAttr('style');
        }
    });
    
    // 변수 높이값 지정
    
    $("#menu a").click(function(e){
		var posY = $($(this).attr("href")).position();		
		$("html,body").stop().animate({'scrollTop':posY.top},1000);
		e.preventDefault();
	}); 
    
    
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
    
    
});
