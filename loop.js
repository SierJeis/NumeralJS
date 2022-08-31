function updatecount(){
    setInterval(() => {
        if(clicks <= 1000){
            document.querySelector(".clicks").innerHTML = "Clicks: "+Math.round(clicks);
        } else {
            document.querySelector(".clicks").innerHTML = "Clicks: "+format(clicks, 1);
        }
        document.querySelector(".cost").innerHTML = "Cost: "+slowcost+" Clicks"
        document.querySelector(".cps").innerHTML = "Autoclicking at "+cps+" Clicks Per Second"
        document.querySelector(".slowclick").innerHTML = "Slow Clicker (1 cps) x "+slowclick;
        if(clicks >= 10){
            document.querySelector(".gens").style.display = 'inline';
        }
        if(clicks >= 50){
            document.querySelector(".gens2").style.display = 'inline';
        }
    }, 10);
}

function productionLoop(diff){
    clicks += slowclick * diff;
    clicks += okayclick * 5 * diff;
}

function mainLoop(){
    var diff = (Date.now() - lastUpdate) / 1000;

    productionLoop(diff)
    updatecount()
    lastUpdate = Date.now()
}

setInterval(mainLoop, 50)