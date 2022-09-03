function save(){
    localStorage.setItem("Clicks", clicks);
    localStorage.setItem("SlowClickers", slowclick);
    localStorage.setItem("OkayClickers", okayclick);
    localStorage.setItem("UltraClickers", ultraclick);
    localStorage.setItem("HyperClickers", hyperclick);
    localStorage.setItem("LastUpdate", lastUpdate);
    localStorage.setItem("CPS", cps);
}

function getsave(){
    clicks = JSON.parse(localStorage.getItem("Clicks"));
    slowclick = JSON.parse(localStorage.getItem("SlowClickers"));
    okayclick = JSON.parse(localStorage.getItem("OkayClickers"));
    ultraclick = JSON.parse(localStorage.getItem("UltraClickers"));
    hyperclick = JSON.parse(localStorage.getItem("HyperClickers"));
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
}

setInterval(save, 1000);

window.onload = getsave();