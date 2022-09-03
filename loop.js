var clicker1 = document.querySelector(".gen1");

function updatecount(){
    setInterval(() => {
        if(clicks <= 1000){
            document.querySelector(".clicks").innerHTML = "Clicks: "+Math.round(clicks);
        } else {
            document.querySelector(".clicks").innerHTML = "Clicks: "+format(clicks, 1);
        }
        document.querySelector(".cost").innerHTML = "Cost: "+slowcost+" Clicks"
        document.querySelector(".cps").innerHTML = "Autoclicking at "+format(cps, 1)+" Clicks Per Second"
        document.querySelector(".slowclick").innerHTML = "Slow Clicker (1 cps) x "+slowclick;
        document.querySelector(".okayclick").innerHTML = "Okay Clicker (5 cps) x "+okayclick;
        document.querySelector(".ultraclick").innerHTML = "Ultra Clicker (20 cps) x"+ultraclick;
        document.querySelector(".hyperclick").innerHTML = "Hyper Clicker (100 cps) x "+hyperclick;
        document.querySelector(".megaclick").innerHTML = "Mega Clicker (350 cps) x "+megaclick;
        document.querySelector(".gigaclick").innerHTML = "Giga Clicker (1000 cps) x "+gigaclick;
        if(clicks >= 10){
            document.querySelector(".gen1").style.display = 'inline';
            document.getElementById("bullet1").style.listStyle = 'disc';
        }
        if(clicks >= 50){
            document.querySelector(".gen2").style.display = 'inline';
            document.getElementById("bullet2").style.listStyle = 'disc';
        }
        if(clicks >= 500){
            document.querySelector(".gen3").style.display = 'inline';
            document.getElementById("bullet3").style.listStyle = 'disc';
        }
        if(clicks >= 5000){
            document.querySelector(".gen4").style.display = 'inline';
            document.getElementById("bullet4").style.listStyle = 'disc';
        }
        if(clicks >= 20000){
            document.querySelector(".gen5").style.display = 'inline';
            document.getElementById("bullet5").style.listStyle = 'disc';
        }
        if(clicks >= 100000){
            document.querySelector(".gen6").style.display = 'inline';
            document.getElementById("bullet6").style.listStyle = 'disc';
        }
    }, 10);
}

function productionLoop(diff){
    clicks += slowclick * diff;
    clicks += okayclick * 5 * diff;
    clicks += ultraclick * 20 * diff;
    clicks += hyperclick * 100 * diff;
    clicks += megaclick * 350 * diff;
    clicks += gigaclick * 1000 * diff;
}

function mainLoop(){
    var diff = (Date.now() - lastUpdate) / 1000;

    productionLoop(diff)
    updatecount()
    lastUpdate = Date.now()
}

setInterval(mainLoop, 10)