const theBackgrounds = ["bg00001.jpg", "bg00002.jpg", "bg00003.jpg", "bg00004.jpg", "bg00005.jpg", "bg00006.jpg", "bg00007.jpg"];

function getRandomBackground() {
    let currentBackground = "images/backgrounds/bg0000";

    currentBackground += Math.floor(Math.random() * theBackgrounds.length + 1);

    currentBackground += ".jpg";

    document.body.style.backgroundImage = "url(" + currentBackground + ")";

    console.log = currentBackground;


}

// Countdown
// Set the date we're counting down to
var countDownDate = new Date("Aug 12, 2025 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var isOdd = new Date().getSeconds() % 2;
    // console.log(isOdd);
    
    if(isOdd === 0) {
        document.getElementById("the-countdown").style.color = "blue";
    }
    else {
        document.getElementById("the-countdown").style.color = "red";        
    }


    // Output the result in an element with id="the-countdown"
    document.getElementById("the-countdown").innerHTML = days + "<br>DAYS!";


}, 1000);

window.onload = function () {
    getRandomBackground();
    document.getElementById("current-year").innerHTML = new Date().getFullYear();
};
