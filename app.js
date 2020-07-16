var min=0;
var sec=0;
var msec=0;
var mmin=0;
var ssec=0;
var mmsec=0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var mminHeading = document.getElementById("mmin");
var ssecHeading = document.getElementById("ssec");
var mmsecHeading = document.getElementById("mmsec");
function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if (sec>=60){
        min++;
        sec=0;
        minHeading.innerHTML=min;
    }
}
function start(){
    document.getElementById("sbtn").disabled=true;
    interval = setInterval(timer, 10);

}
function stop(){
    document.getElementById("sbtn").disabled=false;
    mminHeading.innerHTML=min;
    ssecHeading.innerHTML=sec;
    mmsecHeading.innerHTML=msec;
    clearInterval(interval);
    
}
function reset(){
    var ul = document.getElementById("lap");
        ul.innerHTML = "";
    
    minHeading.innerHTML=0;
    secHeading.innerHTML=0;
    msecHeading.innerHTML=0;
    mminHeading.innerHTML=0;
    ssecHeading.innerHTML=0;
    mmsecHeading.innerHTML=0;
    
    min=0;
    sec=0;
    msec=0;
    stop()
}

function labs(){
        const tim = [min,sec,msec] ;
        var node = document.createElement("LI");
        var textnode = document.createTextNode(tim);
        node.appendChild(textnode);
        document.getElementById("lap").appendChild(node);
      }

