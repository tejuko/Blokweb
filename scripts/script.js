// JavaScript Document
// darkmode
console.log("hi");

var icon = document.getElementById("darkmode");

darkmode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darkmode.src = "readme-images/lightmode.png"
    }else{
        darkmode.src = "readme-images/darkmode.png"
    }
}

// hamburgermenu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        hamburgerMenu.classList.toggle('active');
    });
});


/*bron: https://www.youtube.com/watch?v=9LZGB3OLXNQ&t=249s&ab_channel=GreatStack*/