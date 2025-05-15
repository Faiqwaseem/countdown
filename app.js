function countdown() {
    var nowDate = new Date();
    var eidAdha = new Date("jun 06 2025");
    var msEid = eidAdha.getTime();
    var msNow = nowDate.getTime();
    var diff = msEid - msNow
    diff = Math.floor(diff);
    if(diff < 0){
        document.getElementById("main").innerHTML = "Eif has Passed";
        clearInterval(countdown);
        return;
    }
    console.log(Math.floor(diff));
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    var sec = Math.floor(diff % (1000 * 60) / (1000));



    document.getElementById("days").innerHTML = days;
    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    
}
countdown();
setInterval(countdown,1000);
// 1 second = 1000 ms
// 1 minute = 60 * 1000
// 1 hour = 60 * 60 * 1000
// 1 day = 24 * 60 * 60 * 1000