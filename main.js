var clicks = 0;
var slowclick = 0;
var okayclick = 0;
var ultraclick = 0;
var hyperclick = 0;
var megaclick = 0;
var gigaclick = 0;
var slowcost = 10;
var okaycost = 50;
var ultracost = 500;
var hypercost = 5000;
var megacost = 20000;
var gigacost = 100000;
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

function buyultra(){
    if(clicks >= 500){
        clicks -= 500;
        ultraclick++;
        cps += 20;
    }
}

function buyhyper(){
    if(clicks >= 5000){
        clicks -= 5000;
        hyperclick++;
        cps += 100;
    }
}

function buymega(){
    if(clicks >= 20000){
        clicks -= 20000;
        megaclick++;
        cps += 350;
    }
}

function buygiga(){
    if(clicks >= 100000){
        clicks -= 100000;
        gigaclick++;
        cps += 1000;
    }
}

function settings(){
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".btn").style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector(".menu").style.display = 'inline';
    document.querySelector(".gens").style.display = 'none';
    document.querySelector(".return").style.display = 'inline';
}

function Return(){
    document.querySelector(".main").style.display = 'inline';
    document.querySelector(".btn").style.display = 'inline';
    document.querySelector(".settings").style.display = 'inline';
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".gens").style.display = 'inline';
    document.querySelector(".return").style.display = 'none';
}