$(function () {
    // 프로그래스바
    let progresssState = 0;

    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st >= 1500) {
            if (progresssState === 0) {
                pgbar(0, 90);
                pgbar(1, 80);
                pgbar(2, 75);
                progresssState = 1;
            } else {
                return
            }
            console.log(st)
        } else {
            progresssState = 0;
        }
    });

    function pgbar(idx, maxCnt) {
        var elem = $(".progress div");
        var w = 0;
        var timer = setInterval(bar, 15);
        console.log(elem)
        function bar() {
            if (w >= maxCnt) {
                clearInterval(timer);
            } else {
                w++;
                elem.eq(idx).css({ width: w + "%" });
                elem.eq(idx).text(w + "%");
            }
        }
    }

    // 카운터 바
    const elem = $('#counter span');
    let counterState = 0;
    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st >= 1500) {
            if(counterState===0){
                move(0,16,50);
                move(1,8,100);
                move(2,4,200);
                move(3,2,500);
                counterState = 1;
            } else{
                return;
            }
        } else{
            counterState = 0;
        }
    });

    function move(idx,maxCnt,settime) {
        let num = 0;
        // counter 함수를 0.1초마다 실행
        const timer = setInterval(counter, settime);
        
        function counter() {
            if (num >= maxCnt) {
                clearInterval(timer);
                // return;
            } else {
                num++;
                elem.eq(idx).text(`${num}+`);
            }
        }
    }
});