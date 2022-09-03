function save(){
    localStorage.setItem("Clicks", clicks);
    localStorage.setItem("SlowClickers", slowclick);
    localStorage.setItem("OkayClickers", okayclick);
    localStorage.setItem("UltraClickers", ultraclick);
    localStorage.setItem("HyperClickers", hyperclick);
    localStorage.setItem("MegaClickers", megaclick);
    localStorage.setItem("GigaClickers", gigaclick);
    localStorage.setItem("LastUpdate", lastUpdate);
    localStorage.setItem("CPS", cps);
}

function getsave(){
    clicks = JSON.parse(localStorage.getItem("Clicks"));
    slowclick = JSON.parse(localStorage.getItem("SlowClickers"));
    okayclick = JSON.parse(localStorage.getItem("OkayClickers"));
    ultraclick = JSON.parse(localStorage.getItem("UltraClickers"));
    hyperclick = JSON.parse(localStorage.getItem("HyperClickers"));
    megaclick = JSON.parse(localStorage.getItem("MegaClickers"));
    gigaclick = JSON.parse(localStorage.getItem("GigaClickers"));
    lastUpdate = JSON.parse(localStorage.getItem("LastUpdate"));
    cps = JSON.parse(localStorage.getItem("CPS"));
    if(slowclick == null){
        slowclick = 0;
    }
    if(okayclick == null){
        okayclick = 0;
    }
    if(ultraclick == null){
        ultraclick = 0;
    }
    if(hyperclick == null){
        hyperclick = 0;
    }
    if(megaclick == null){
        megaclick = 0;
    }
    if(gigaclick == null){
        gigaclick = 0;
    }
    if(cps == null){
        cps = 0;
    }
}

setInterval(save, 1000);

window.onload = getsave();

