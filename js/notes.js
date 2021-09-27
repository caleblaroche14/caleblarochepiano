var keys = document.getElementsByClassName('key');
var bkeys = document.getElementsByClassName('bkey');

for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mousedown',(e)=>{
        document.getElementById('wav'+e.path[0].id).currentTime = 0;
        document.getElementById('wav'+e.path[0].id).play();
        createVisual(e);
    });
}

for (i = 0; i < bkeys.length; i++) {
    bkeys[i].addEventListener('mousedown',(e)=>{
        document.getElementById('wav'+e.path[0].id).currentTime = 0;
        document.getElementById('wav'+e.path[0].id).play();
        createVisual(e);
    });
}

var counter = 0;
function createVisual(e){
    // create a new div element
    var newDiv = document.createElement("div");
    newDiv.className = 'float-right';
    
    counter++;
    newDiv.setAttribute('id','float'+counter);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("html");
    document.body.insertBefore(newDiv, currentDiv);
    relocate(e,'float'+counter);
}

function relocate(e,id){
    document.getElementById(id).style.backgroundColor = 'rgba(100,100,100,.2)';
    document.getElementById(id).style.top = e.path[0].offsetTop + 'px';
    setTimeout(function(){
        removeElement(id);
    },4000);
    //console.log(document.getElementById(id).style.top);
}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function pressKey(){
    keys[5].click();
    console.log('cluck');
}

//setInterval((pressKey),500);