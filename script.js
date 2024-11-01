let clock = document.getElementById("clock-time");

setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();


}, 1000)