// ハンバーガーメニュー
$(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });

    $('#nav a').click(function(){
        $(this).removeClass('active');
        $('#hamburger').removeClass('active');
        $('#nav').removeClass('active');
    });

    $('#header-logo a').click(function(){
        $('#hamburger').removeClass('active');
        $('#nav').removeClass('active');
    })

    var headerBtn = $('.header');
    headerBtn.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 520){
            headerBtn.fadeIn();
        } else {
            headerBtn.fadeOut();
        }
    });
});

// スクロールイベント
$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(window.innerWidth > 900){
            var imgSize = 100/3 + (scroll/10);
            $('.main-img').css({
                'width':imgSize + '%'
            });
        } else {
            var imgResponsive = 100 - (scroll/10);
            $('.main-img').css({
                'width':imgResponsive + '%'
            });
        }

        var sideBtn = $('#btn-area');
        var windowHeight = $(window).height();
        var galleryPosition = $('#gallery').offset().top - windowHeight; 
        var accessPosition = $('#access').offset().top - windowHeight;
        if(window.innerWidth > 900){
            if(scroll > galleryPosition){
                if(scroll < accessPosition){
                    sideBtn.css({
                        'transform':'rotate(-90deg) translateY(0)'
                    });
                } else {
                    sideBtn.css({
                        'transform':'rotate(-90deg) translateY(100%)'
                    });
                }
            } else {
                sideBtn.css({
                    'transform':'rotate(-90deg) translateY(100%)'
                });
            }
        }

        var contactPosition = $('#contact').offset().top - windowHeight;
        var bg = $('#access-bg');
        if(scroll > accessPosition){
            if(scroll < contactPosition){
                bg.fadeIn();
            } else {
                bg.fadeOut();
            }
        } else {
            bg.fadeOut();
        }
    });
});

// フェードイン
$(function(){
    $('.fade-in').on('inview',function(){
        $(this).addClass('show');
    });
});

// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var type = 'swing';
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html': href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position},speed,type);
        return false;
    });
});

