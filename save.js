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
        document.querySelector(".slowclick").style.display = 'none';
    }
    if(okayclick == null){
        okayclick = 0;
        document.querySelector(".okayclick").style.display = 'none';
    }
    if(ultraclick == null){
        ultraclick = 0;
        document.querySelector(".megaclick").style.display = 'none';
    }
    if(hyperclick == null){
        hyperclick = 0;
        document.querySelector(".hyperclick").style.display = 'none';
    }
    if(megaclick == null){
        megaclick = 0;
        document.querySelector(".megaclick").style.display = 'none';
    }
    if(gigaclick == null){
        gigaclick = 0;
        document.querySelector(".gigaclick").style.display = 'none';
    }
    if(cps == null){
        cps = 0;
    }
}

function reset(){
    localStorage.clear();
}

setInterval(save, 1000);

window.onload = getsave();

