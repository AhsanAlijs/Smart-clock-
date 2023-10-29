const display = document.getElementById('clockDisplay');
function smartwatch() {
    var date = new Date();
    var houre = date.getHours(0-23);
    var minut = date.getMinutes(0-59);
    var second = date.getSeconds(0-59);
    var session = "PM"
console.log();
    if (houre == 0) {
        houre = 12;
    }
    if (houre > 12) {
        houre = houre - 12;
        session = "AM"
    }
    houre = (houre < 10) ? "0" + houre : houre;
    minut = (minut < 10) ? "0" + minut : minut;
    second = (second < 10) ? "0" + second : second;
    // var time = h + ":" + m + ":" + s + " " + session;
    display.innerHTML = `<div class="timejs">
    <Span class="hour">${houre}</Span>:<span class="min">${minut}</span>:<span class="sec">${second}</span>
    <sub class="session">${session}</sub>
    </div>
    <div class="date date-2">${date.toLocaleDateString()}</div>
    `
    
    setTimeout(smartwatch, 1000);
}
smartwatch();


