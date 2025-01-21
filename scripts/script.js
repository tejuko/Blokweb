// JavaScript Document
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

/*bron: https://www.youtube.com/watch?v=9LZGB3OLXNQ&t=249s&ab_channel=GreatStack*/