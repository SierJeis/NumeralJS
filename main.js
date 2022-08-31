var clicks = 0;
var slowclick = 0;
var okayclick = 0;
var slowcost = 10;
var okaycost = 50;
var lastUpdate = Date.now();
var cps = 0;


function clicked(){
    clicks += 1;
}

function buyslow(){
    if(clicks >= 10){
        clicks -= 10;
        slowclick++;
        cps++;
    }
}

function buyokay(){
    if(clicks >= 50){
        clicks -= 50;
        okayclick++;
        cps += 5;
    }
}

