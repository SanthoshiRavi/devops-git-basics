function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

setInterval(showTime, 1000);
