/* 
    제이쿼리
    $(funtion(){});
    자바스크립트
    document.addEventListener('DOMContentLoaded', function (){});
*/

// 문서의 Dom내용을 전부 읽은 후 함수를 실행시킨다
document.addEventListener('DOMContentLoaded', function () {

    const d_yy = document.querySelector('.yy'),
        d_mo = document.querySelector('.mo'),
        d_dd = document.querySelector('.dd'),
        d_we = document.querySelector('.we'),
        d_hh = document.querySelector('.hh'),
        d_mm = document.querySelector('.mm'),
        d_ss = document.querySelector('.ss');

    setInterval(timer, 1000);

    function timer() {
        // Tue May 23 2023 16:17:30 GMT+0900 (한국 표준시)
        let d = new Date();
        // 년(yyyy)
        d_yy.innerHTML = d.getFullYear() + '년';
        // 월(mm) : 0(1월) ~ 11(12월)
        d_mo.innerHTML = d.getMonth() + 1 + '월';
        // 일(dd)
        d_dd.innerHTML = d.getDate() + '일';

        // 요일(week) : 0(일) ~ 6(토)
        // document.write(d.getDay(),'<br>')
        //요일을 일요일~토요일까지 문자열로 표시하기
        let week = d.getDay();
        if (week === 0) {
            week = '일요일<br>';
        } else if (week === 1) {
            week = '월요일<br>';
        } else if (week === 2) {
            week = '화요일<br>';
        } else if (week === 3) {
            week = '수요일<br>';
        } else if (week === 4) {
            week = '목요일<br>';
        } else if (week === 5) {
            week = '금요일<br>';
        } else {
            week = '토요일<br>';
        }
        d_we.innerHTML = week;

        // 시(hh)
        // document.write(d.getHours(),'시<br>')
        // 오전과 오후를 구분하여 12시간제로 표시하기
        let hours = d.getHours();
        if (hours < 12) {
            hh = '오전 ' + hours + '시';
        } else if (hours === 12) {
            hh = '오후 ' + (hours) + '시';
        } else if (hours === 0) {
            hh = '오전 ' + (hours + 12) + '시';
        }
        else {
            hh = '오후 ' + (hours - 12) + '시';
        }
        d_hh.innerHTML = hh;

        // 분(mm)
        // document.write(d.getMinutes(), '분<br>');
        // 01~09~10~60
        let mm = d.getMinutes();
        if (mm < 10) {
            mm = '0' + mm;
        }
        d_mm.innerHTML = mm + '분';

        // 초(ss)
        // document.write(d.getSeconds(), '초<br>')
        // 01~09 ~10~60
        let ss = d.getSeconds();
        if (ss < 10) {
            ss = '0' + ss;
        }
        d_ss.innerHTML = ss + '초';
    };
})