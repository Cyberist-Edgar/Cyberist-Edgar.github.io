// setting 

var angle=0;
function transform(){
    let setting = document.getElementById('float-right-svg')
    setting.style.transform = 'rotate(' + angle%360+'deg)';
    angle+=10;
}

setInterval(transform,100);


var gear = document.getElementById("float-right");
console.log(gear.height)

