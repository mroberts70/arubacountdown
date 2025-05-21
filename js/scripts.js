const theBackgrounds = ["bg00001.jpg", "bg00002.jpg", "bg00003.jpg", "bg00004.jpg", "bg00005.jpg", "bg00006.jpg", "bg00007.jpg"];

function getRandomBackground() {
    let currentBackground = "images/backgrounds/bg0000";

    currentBackground += Math.floor(Math.random() * theBackgrounds.length + 1);

    currentBackground += ".jpg";

    document.body.style.backgroundImage = "url(" + currentBackground + ")";

    console.log = currentBackground;

    
}
window.onload = function() {
    getRandomBackground();

};
