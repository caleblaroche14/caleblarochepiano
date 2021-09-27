// time line creation
var timelineBlock = document.getElementById('timelineBlock');
var timelineStart = document.getElementById('timelineStart');
var timelineEnd = document.getElementById('timelineEnd');

var begin = timelineBlock.getBoundingClientRect();

timelineBlock.style.height = 2000 + "px";
timelineBlock.style.top = begin.top + "px";
timelineBlock.style.left =  (begin.left - 200) + "px";
console.log(begin.left);