const days =["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function displayTime(date){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var weekDay = date.getDay();
    document.getElementById("weekday").innerHTML =days[weekDay];
    document.getElementById("year").innerHTML = year;
    document.getElementById("date").innerHTML = day;
    document.getElementById("month").innerHTML = month+1; //January is 0
    //format time
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    if(hour>=12){
        document.getElementById("session").innerHTML="PM";
    }
    else{
        document.getElementById("session").innerHTML="AM";
    }
        
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
}

setInterval(displayTime, 10);

function changeBg(){
    var time = new Date();
    var curHr = time.getHours();
const background = document.getElementById("main");
        const img = document.createElement("img");
        if(curHr>=5 && curHr<=10){
            img.setAttribute("src", "assets/pexels-krivec-ales-552789.jpg");
            img.setAttribute("class", "bgImg");
            background.appendChild(img);
         }
         else if(curHr>10 && curHr<17){
            img.setAttribute("src", "assets/pexels-sia-panayidou-9480432.jpg");
            img.setAttribute("class", "bgImg");
            background.appendChild(img);
         }
         else if(curHr=>17 && curHr<20){
            img.setAttribute("src", "assets/pexels-lucas-pezeta-3870004.jpg");
            img.setAttribute("class", "bgImg");
            background.appendChild(img);
         }
         else{
            mg.setAttribute("src", "assets/pexels-min-an-813269.jpg");
            img.setAttribute("class", "bgImg");
            background.appendChild(img);
         }
}
changeBg();

// themes

const container = document.getElementById("container");
const theme1 = document.getElementById("theme1");
theme1.addEventListener('click', ()=>{
    let themeImg = document.getElementById("themeImg1");
    container.style.backgroundImage=`url(${themeImg.src})`
})

const theme2 = document.getElementById("theme2");
theme2.addEventListener('click', ()=>{
    let themeImg = document.getElementById("themeImg2");
    container.style.backgroundImage=`url(${themeImg.src})`
})

const theme3 = document.getElementById("theme3");
theme3.addEventListener('click', ()=>{
    let themeImg = document.getElementById("themeImg3");
    container.style.backgroundImage=`url(${themeImg.src})`
})

const theme4 = document.getElementById("theme4");
theme4.addEventListener('click', ()=>{
    let themeImg = document.getElementById("themeImg4");
    container.style.backgroundImage=`url(${themeImg.src})`
})

const theme5 = document.getElementById("theme5");
theme5.addEventListener('click', ()=>{
    let themeImg = document.getElementById("themeImg5");
    container.style.backgroundImage=`url(${themeImg.src})`
})