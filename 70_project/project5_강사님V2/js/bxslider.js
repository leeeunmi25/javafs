// 문서가 준비되면 함수 실행
$(function () {
    // 내비게이션바
    $('.main > li > a').mouseenter(function (e) {
        e.preventDefault // a태그 기본 이벤트 제거
        $('.sub').stop().slideDown();
        $('.nav_bg').stop().animate({ height: 160 }, 400);
    });
    $('header').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('.nav_bg').stop().animate({ height: 0 }, 400);
    });

    // 섹션1 - 비디오 자동플레이
    // $('video').get(0).play();

    // 섹션1 - 캐로셀
    $('.bxslider').bxSlider({
        // 자동 재생
        auto: true,
        // autoControls: true, //일시정지와 재실행 버튼
        stopAutoOnClick: true,
        pager: true
        // slideWidth: 2000
    });

    // 풀페이지 레이아웃
    /* $('.section').mousewheel(function (e, delta) {
        let prev;
        if (delta > 0) {
            prev = $(this).prev().offset().top;
            console.log(prev);
            $('html').stop().animate({ scrollTop: prev }, 400, 'easeOutExpo');
        } else if (delta < 0) {
            let next = $(this).next().offset().top;
            console.log(next);
            $('html').stop().animate({ scrollTop: next }, 400, 'easeOutExpo');
        }
    }); */
    window.onload = function () {
        let elNavi = document.querySelector("#fullpage");
        let aElSection = document.querySelectorAll(".section");
        let curSIdx = 0;

        let wheelTimer;
        window.onwheel = function (e) {
            clearTimeout(wheelTimer);
            wheelTimer = setTimeout(function () {
                if (e.deltaY > 0) {
                    doScroll(++curSIdx);
                } else { doScroll(--curSIdx) };
            }, 50);
        };

        function doScroll(sidx) {
            sidx = sidx < 0 ? 0 : sidx;
            sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;

            curSIdx = sidx;

            aElSection[curSIdx].scrollIntoView({
                block: "start", inline: "start", behavior: "smooth"
            });
        }
    };
});