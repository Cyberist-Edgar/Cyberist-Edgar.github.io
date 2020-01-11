// setting 

var angle=0;
function transform(){
    let setting = document.getElementById('float-right-svg')
    setting.style.transform = 'rotate(' + angle%360+'deg)';
    angle+=10;
}

setInterval(transform,100);

function show(){
    var pop = document.getElementsByClassName("pop")[0];
    pop.style.display = 'block';
    var popup = document.getElementsByClassName("popup")[0];
    popup.style.display = "block";
}

function off(){
    var pop = document.getElementsByClassName("pop")[0];
    pop.style.display = 'none';
    var popup = document.getElementsByClassName("popup")[0];
    popup.style.display = "none ";

}
