/* 
문서의 DOM내용을 읽은 후 함수를 실행
제이쿼리
$(function(){});

자바스크립트
document.addEventListener('DOMContentLoaded', function(){});
*/
document.addEventListener('DOMContentLoaded', function(){

    //변수
    const yArea = document.querySelector('.yy'),
    oArea = document.querySelector('.mo'),
    dArea = document.querySelector('.dd'),
    wArea = document.querySelector('.we'),
    hArea = document.querySelector('.hh'),
    mArea = document.querySelector('.mm'),
    sArea = document.querySelector('.ss');
    
    setInterval (timer, 1000);
    
    function timer() {

        //날짜와 시간 d 객체 생성
        let d = new Date();
        //년(yyyy)
        yArea.innerHTML = d.getFullYear() + '년';
        //월(mm): 0(1월) ~ 11(12월)
        oArea.innerHTML = d.getMonth() + 1 +'월';
        //일(dd)
        dArea.innerHTML = d.getDate() + '일';
        //요일(week): 0(일) ~ 6(토)
        //if를 사용하여 요일을 일요일 ~ 토요일까지 문자열로 표시하기

        let week = d.getDay();


        if (week === 0) {
            week = '일';
        } else if (week === 1) {
            week = '월';
        } else if (week === 2) {
            week = '화';
        } else if (week === 3) {
            week = '수';
        } else if (week === 4) {
            week = '목';
        } else if (week === 5) {
            week = '금';
        } else {
            week = '토';
        }
        wArea.innerHTML = week + '요일';

        //시(hh)
        let hh = d.getHours();
        if (hh >= 13) {
            hh = 'PM' + (hh - 12);
        } else if (hh >= 10) {
            hh = 'AM' + hh;
        } else {
            hh = 'AM 0' + hh;
        }
        hArea.innerHTML = hh + '시';


        //분(mm)
        //00 ~ 09, 10 ~ 60
        let mm = d.getMinutes();
        if (mm < 10) {
            mm = '0' + mm;
        }
        mArea.innerHTML = mm +'분';

        //초(ss)
        // 01 ~ 09 ~ 10 ~ 60

        let ss = d.getSeconds();
        if (ss < 10) {
            ss = '0' + ss;
        }
        sArea.innerHTML = ss + '초';
        d.getTime()

        var d2 = new Date(2020, 1, 20);
        console.log(d2);
    }
});