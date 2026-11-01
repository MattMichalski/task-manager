function todaysDate(){
    const iso = new Date().toISOString();
    const today = new Date(iso).toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit"});
   
    let txtNode = document.createTextNode(`Today is ${today}`);
    let span = document.createElement("h3");
    span.id = "time";
    span.appendChild(txtNode); 
    let y = document.getElementById("subRoot");
    y.appendChild(span);
}

function updateTime(){
    let iso = new Date().toISOString();
    let timeToChange = new Date(iso).toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit"});
    let update = document.getElementById('time');
    update.textContent = `Today is ${timeToChange}`;

}

todaysDate();
setInterval(updateTime, 1000);    
