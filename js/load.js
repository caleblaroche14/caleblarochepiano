var body = document.getElementById('body');
var o = 0;

var loadIn = setInterval(updateOpacity,20);
function updateOpacity(){
    if (o < 1){
        o+=.01;
        body.style.opacity = o;
    }  else {
        body.style.opacity = 1;
        clearInterval(loadIn);
    }
}