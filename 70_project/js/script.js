$(function(){
    //프로그래스바
    let progressState = 0;
    
            $(window).scroll(function () {
                if ($(this).scrollTop() >= 150) {
                    if (progressState === 0) {
                        move(0, 90);
                        move(1, 85);
                        move(2, 75);
                        progressState = 1;
                    } else {
                        return;
                    }
                } else {
                    progressState = 0;
                }
            });
    
    
            function move(idx, maxPro) {
                const elem = $(".progress div");
                let w = 0;
                const timer = setInterval(bar, 30);
    
                function bar() {
                    if (w >= maxPro) {
                        clearInterval(timer);
                    } else {
                        w++;
                        elem.eq(idx).css({ width: w + "%" });
                        elem.eq(idx).text(w + "%");
                    }
                }
            }
    
    
    
    /* 카운터바 */
            const elem = $('#counter span');
            let stateCnt = 0;
            $(window).scroll(function () {
                if ($(this).scrollTop() >= 2150) {
                    if (stateCnt === 0) {
                        move(0, 20, 100);
                        move(1, 4, 500);
                        move(2, 5, 400);
                        move(3, 2, 1000);
                        stateCnt = 1;
                    } else {
                        return;
                    }
                } else {
                    stateCnt = 0;
                    //  올렸다 내릴때 마다 동작
                }
            });
    
    
            // let st = $('this').scroll;
            function move(idx, maxCnt, mSec) {
                let num = 0;
                //count 함수를 0.1초마다 실행
                const timer = setInterval(counter, mSec);
                function counter() {
                    if (num >= maxCnt) {
                        clearInterval(timer);
                    } else {
                        num++;
                        elem.eq(idx).text(`${num}+`);
                    }
                }
            }
    
    
    });
    