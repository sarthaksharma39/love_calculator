var d = document.getElementById("btn1");
var o= document.getElementById("out");
function love(){
    var r= Math.random()*101;
    r= Math.floor(r);
    o.innerHTML=r + "%";
}

d.addEventListener("click",love);
